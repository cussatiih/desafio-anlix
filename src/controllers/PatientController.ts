import { Request, Response } from "express";
import IPatient from "../interfaces/IPatient";
import PatientService from "../services/PatientService";
import DateParser from "../utils/dateParser";

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
    } catch (e: any) {
      return res.status(e.statusCode).json({ message: e.message });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const patient = req.body;

    const formattedDate = DateParser.parse(patient.birthDate);

    const patientPayload: IPatient = {
      name: patient.name,
      age: patient.age,
      cpf: patient.cpf,
      rg: patient.rg,
      birthDate: formattedDate,
      sex: patient.sex,
      sign: patient.sign,
      motherName: patient.motherName,
      fatherName: patient.fatherName,
      email: patient.email,
      password: patient.password,
      zipCode: patient.zipCode,
      address: patient.address,
      addressNumber: patient.addressNumber,
      district: patient.district,
      city: patient.city,
      state: patient.state,
      phone: patient.phone,
      mobilePhone: patient.mobilePhone,
      height: patient.height,
      weight: patient.weight,
      bloodType: patient.bloodType,
      color: patient.color,
    };

    try {
      const createdPatient = await PatientService.create(patientPayload);

      if (!createdPatient)
        return res.status(200).json({ message: "Patient already exists." });

      return res.status(200).json(createdPatient);
    } catch (error) {
      return res.json("error");
    }
  }
}
