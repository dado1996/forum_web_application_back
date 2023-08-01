import express, { json } from "express";
import { environment } from "./environment";
import { routerApi } from "./routes/v1";
import { connect, closeConnection } from "./lib/mongo";
import { errorHandler } from "./middleware/error";

const app = express();
const PORT = environment.port;

app.use(json());

connect();

routerApi(app);

app.use(errorHandler);

process.on("SIGINT", async () => {
    await closeConnection();
    process.exit();
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
