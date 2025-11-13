// src/app/services/login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, tap } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';
//import { AuthService } from './auth.service';

export interface LoginResponse {
  token: string;
  user?: any;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = '/api/auth/login'; // update to your backend

  constructor(private http: HttpClient, private auth: AuthService) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email, password };
    return this.http.post<LoginResponse>(this.loginUrl, body).pipe(
      tap((res) => {
        if (res?.token) this.auth.setToken(res.token);
      })
    );
  }

  logout() {
    this.auth.clearToken();
    // optionally call backend logout
  }

  // optional helper to normalize errors if you want:
  private handleError(err: HttpErrorResponse) {
    let message = 'Unknown error';
    if (err.error?.message) message = err.error.message;
    else if (err.status === 0) message = 'Cannot reach server.';
    else message = `Server returned ${err.status}: ${err.statusText}`;
    return throwError(() => ({ status: err.status, message, original: err }));
  }
}
