export interface User {
    name: string;
    email: string;
    password: string;
}

export interface CreateUserDTO extends User {

}