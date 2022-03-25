import env from "dotenv-safe";
import express from "express";
import cors from "cors";
import PatientRouter from "./routes/PatientRouter";
import PatientController from "./controllers/PatientController";

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
    new PatientRouter(this.app, new PatientController());
  }

  public start(): void {
    const port = env.config().parsed?.PORT;
    this.app.listen(process.env.PORT || port || 3333, () => {
      console.log("Server is listening on port", port);
    });
  }
}
