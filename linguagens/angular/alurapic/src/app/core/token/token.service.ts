import { Injectable } from '@angular/core';

const KEY = 'authToken'

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(): boolean {
    return !!this.token;
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  get token(): string | null {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
