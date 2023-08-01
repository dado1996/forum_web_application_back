import Joi from 'joi';
import { CreateUserDTO } from '../interfaces/user';

const name = Joi.string().min(4).max(100);
const email = Joi.string().email();
const password = Joi.string()
  .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
  .message('Not a valid password');

export const RegisterSchema = Joi.object<CreateUserDTO>({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});
