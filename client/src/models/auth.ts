export interface AuthData {
  token: string;
  refreshToken: string;
  userId: string;
  didAutoLogout: boolean;
  authenticated: boolean;
  confirmation: string;
  message: string;
}

export class AuthData {
  constructor({
    token,
    refreshToken,
    userId,
    didAutoLogout,
    authenticated,
    confirmation,
    message,
  }: AuthData) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.userId = userId;
    this.didAutoLogout = didAutoLogout;
    this.authenticated = authenticated;
    this.confirmation = confirmation;
    this.message = message;
  }
}

export interface Auth {
  authData: AuthData;
  loading: boolean;
  error: string | unknown;
}
