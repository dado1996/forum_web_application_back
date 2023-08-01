import { Express, Router } from "express";
import RegisterRouter from "./register";

export function routerApi(app: Express) {
    const router = Router();
    
    router.use("/register", RegisterRouter);
    app.use("/api/v1", router);

    return app;
}