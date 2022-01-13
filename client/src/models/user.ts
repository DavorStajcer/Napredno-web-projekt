export interface UserData {
  _id: string;
  email: string;
  name: string;
  surname: string;
  password: string;
  token?: string;
  admin: boolean;
}

export class UserData {
  constructor({ _id, name, surname, password, email, admin, token }: UserData) {
    this._id = _id;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.email = email;
    this.admin = admin;
    this.token = token;
  }
}

export interface User {
  data: UserData;
  confirmation: string;
  message: string;
  loading?: boolean;
  error?: string | unknown;
}
