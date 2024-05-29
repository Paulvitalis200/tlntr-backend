import express, { Express } from "express";
import dotenv from "dotenv";
import db from "./models";
import userRouter from "./routes/userRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

db.sequelize.sync();

app.use(express.json());
app.use("/api/users", [userRouter]);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
