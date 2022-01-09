export interface User {
  id: string;
  name: string;
  surname: string;
  password: string;
  email: string;
}

export class User {
  constructor({ id, name, surname, password, email }: User) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.email = email;
  }
}

export interface AllUsers {
  allUsers: User[];
  loading: boolean;
  error: string | unknown;
}
