import { Router } from "express";
import PatientController from "../controllers/PatientController";

export default class PatientRouter {
  constructor(
    private router: Router,
    private patientController: PatientController
  ) {
    this.router.get("/patients", patientController.index);
    this.router.get("/patients/:id", patientController.show);
  }
}
