import { Router } from 'express';
import { validatorHandler } from '../../middleware/validator';
import { RegisterService } from '../../services/register';
import { RegisterSchema } from '../../schemas/register';

const RegisterRouter = Router();
const registerService = new RegisterService();

RegisterRouter.post(
  '/',
  validatorHandler(RegisterSchema, 'body'),
  async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const result = await registerService.register({ name, email, password });

      res.status(201).json({
        status: 'success',
        message: 'The user has been created',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }
);

export default RegisterRouter;
