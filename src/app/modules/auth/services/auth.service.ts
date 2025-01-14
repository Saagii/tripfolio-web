import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'  // This makes the service available throughout the app
  })
export class AuthService {
    private _userRoles: string[] = [];

    constructor(
        private _httpClient: HttpClient,
        private _router:Router
    ){}


    /*
        Set & Get Token from local storage.
    */
    set token(token: any) {
        localStorage.setItem('token', token);
    }

    get tokenValue(): string | null {
        const token = localStorage.getItem('token') ?? null;

        return token ? token : null;
    }

    /*
        Set & Get Token from local storage.
    */
    set userId(userId: string) {
        localStorage.setItem('userId', userId);
    }

    get userIdValue(): string | null {
        const token = localStorage.getItem('userId') ?? null;

        return token ? token : null;
    }

    /*
        Get & Set User Roles.
    */
    get userRoles(): string[] {
        return this._userRoles;
    }

    // Update this method to set roles when user signs in
    setUserRoles(roles: string[]) {
        this._userRoles = roles;
    }
}