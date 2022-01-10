export interface User {
  id?: string;
  name: string;
  surname: string;
  password: string;
  email: string;
  admin: boolean;
}

export class User {
  constructor({ id, name, surname, password, email, admin }: User) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.email = email;
    this.admin = admin;
  }
}

export interface AllUsers {
  allUsers: User[];
  loading: boolean;
  error: string | unknown;
}
