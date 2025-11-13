// src/app/core/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { TokenService } from '../../Services/token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private tokenService: TokenService) {}

  getToken(): string | null {
    return this.tokenService.getToken();
  }

  clearToken() {
    this.tokenService.clearToken();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  get isLoggedIn(): boolean {
    return this.tokenService.isLoggedIn();
  }
}
