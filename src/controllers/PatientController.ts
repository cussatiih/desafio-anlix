import { Request, Response } from "express";
import PatientService from "../services/PatientService";

export default class PatientController {
  async index(req: Request, res: Response): Promise<Response> {
    const patients = await PatientService.index();
    return res.status(200).json(patients);
  }
  async show(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    try {
      const patient = await PatientService.show(id);
      return res.status(200).json(patient);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
