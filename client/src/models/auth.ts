export interface AuthData {
  token: string;
  refreshToken: string;
  userId: string;
  accessToken?: string;
}

export class AuthData {
  constructor({ token, refreshToken, userId, accessToken }: AuthData) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.userId = userId;
    this.accessToken = accessToken;
  }
}

export interface Auth {
  data: AuthData;
  confirmation: string;
  message: string;
  loading?: boolean;
  error?: string | unknown;
}
