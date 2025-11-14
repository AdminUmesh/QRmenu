import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TokenService } from './token.service';

export interface LoginResponse {
  token: string;
  user?: any;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  //private loginUrl = '/api/auth/login';
  private loginUrl = 'https://api.restful-api.dev/objects';

  constructor(private http: HttpClient, private tokenService: TokenService) {
    console.log('LoginService constructed', new Error().stack);
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.loginUrl, { email, password })
      .pipe(
        tap((res) => {
          //if (res?.token) this.tokenService.setToken(res.token);
          this.tokenService.setToken("this is static token");
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    // Only clears token locally — no AuthService dependency
    this.tokenService.clearToken();
  }

  private handleError(err: HttpErrorResponse) {
    let message = 'Unknown error';
    if (err.error?.message) message = err.error.message;
    else if (err.status === 0) message = 'Cannot reach server.';
    else message = `Server returned ${err.status}: ${err.statusText}`;
    return throwError(() => ({ status: err.status, message, original: err }));
  }
}
