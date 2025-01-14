import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackBar.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router, 
    private snackBar: MatSnackBar,
    private snackBarService: SnackbarService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.tokenValue}`
      }
    });
    
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorObject = error.error;
        let errorMessage = errorObject?.errorInfo?.errorMessage || 
                           errorObject?.message || 
                           JSON.stringify(errorObject);

        // Handle unauthorized/forbidden errors
        if (error.status === 401) {
          // this.userSignOut();
          this.snackBarService.showSnackBar('Unauthorized Access. You are signed Out...', 'error');
        }
        if (error.status === 403) {
          if (!errorMessage || errorMessage === '{}' || errorMessage === 'null' || errorMessage === 'undefined' || errorMessage === '') {
            errorMessage = 'You are not authorized to access this resource/perform this action.';
          }
          this.snackBarService.showSnackBar(errorMessage, 'error');
        }
        // Show error message if errorInfo exists
        else if (errorObject?.errorInfo) {
          this.snackBarService.showSnackBar(errorMessage, 'error');
        }

        return throwError(() => error);
      })
    );
  }
}