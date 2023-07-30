import express from "express";
import { environment } from "./environment";

const app = express();
const PORT = environment.port;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});