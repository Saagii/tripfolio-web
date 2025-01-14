import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarData } from '../data/snackbarData';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  showSnackBar(message: string, type: 'error' | 'success' | 'warning' | 'info'): void {
    if (!message) {
      console.warn('Snackbar message is required');
      return;
    }

    if (!Object.keys(SnackbarData.types).includes(type)) {
      console.warn('Invalid snackbar type');
      return;
    }

    this._snackBar.open(message, 'Close', {
      duration: SnackbarData.duration,
      horizontalPosition: SnackbarData.horizontalPosition as 'left' | 'right' | 'center',
      verticalPosition: SnackbarData.verticalPosition as 'top' | 'bottom',
      panelClass: SnackbarData.types[type]
    });
  }
}