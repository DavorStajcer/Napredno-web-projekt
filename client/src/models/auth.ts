export interface AuthData {
  token: string;
  refreshToken: string;
  userId: string;
}

export class AuthData {
  constructor({ token, refreshToken, userId }: AuthData) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.userId = userId;
  }
}

export interface Auth {
  data: AuthData;
  confirmation: string;
  message: string;
  loading: boolean;
  error: string | unknown;
}
