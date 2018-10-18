import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private manager = new UserManager(this.getClientSettings());
  private user: User = null;

  constructor() {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }
  private getClientSettings(): UserManagerSettings {
    return {
      authority: 'http://localhost:64627/',
      client_id: 'eq-gui',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200',
      response_type: 'id_token token',
      scope: 'openid profile',
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true,
      silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
    };
  }
  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }
  getClaims(): any {
    return this.user.profile;
  }
  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }
  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  async logoff() {
    await this.manager.signoutRedirect({});
    this.manager.removeUser();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }
  completeLogout(): Promise<void> {
    return this.manager.signoutRedirectCallback().then(user => { console.log('ohlala'); });
  }
}
