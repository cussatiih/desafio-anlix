import env from "dotenv-safe";
import express from "express";
import { Request, Response } from "express";
import cors from "cors";

export default class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  public routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      return res.json({ message: "Hello World" });
    });
  }

  public start(): void {
    const port = env.config().parsed?.PORT;
    this.app.listen(process.env.PORT || port || 3333, () => {
      console.log("Server is listening on port", port);
    });
  }
}
