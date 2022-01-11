export interface AuthData {
  token: string;
  refreshToken: string;
  userId: string;
  confirmation?: string;
  message?: string;
  didAutoLogout?: boolean;
}

export class AuthData {
  constructor({
    token,
    refreshToken,
    userId,
    didAutoLogout,
    confirmation,
    message,
  }: AuthData) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.userId = userId;
    this.didAutoLogout = didAutoLogout;
    this.confirmation = confirmation;
    this.message = message;
  }
}

export interface Auth {
  data: AuthData;
  loading: boolean;
  error: string | unknown;
}
