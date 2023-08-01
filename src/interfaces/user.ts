export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface CreateUserDTO extends Omit<User, '_id'> {}
