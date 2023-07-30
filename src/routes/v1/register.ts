import { Router } from "express";
import { RegisterService } from "../../services/register";

const RegisterRouter = Router();
const registerService = new RegisterService();

RegisterRouter.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const result = await registerService.register({ name, email, password });

    res
      .status(201)
      .json({
        status: "success",
        message: "The user has been created",
        data: result,
      });
  } catch (error: any) {
    next(error);
  }
});

export default RegisterRouter;
