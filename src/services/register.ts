import { BaseService } from "./base";
import { CreateUserDTO } from "../interfaces/user";
import { Collection } from "mongodb";
import { hash } from "../utils/hashing";
import { UserService } from "./user";
import { ErrorHandler } from "../error/ErrorHandler";

export class RegisterService extends BaseService {
    private collection: Collection;
    constructor() {
      super();
      this.collection = this.db.collection('users');
    }

    async register(data: CreateUserDTO) {
      const { name, email, password } = data;

      const userService = new UserService();
      const existingUser = await userService.findBy(email);
      if (existingUser) {
        throw new ErrorHandler(401, "Email already in use");
      }

      const hashedPassword = hash(password);
      const newUser = await this.collection.insertOne({
        name,
        email,
        password: hashedPassword,
      });

      return newUser;
    }
}
