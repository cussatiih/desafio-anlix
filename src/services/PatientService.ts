import PatientModel from "../database/models/PatientModel";

class PatientService {
  async index() {
    return await PatientModel.findAll();
  }

  async show(id: number) {
    const patient = await PatientModel.findByPk(id);
    if (!patient) throw new Error("Patient not Found");
    return patient;
  }

  async create(patient: any) {
    const newPatient = await PatientModel.create(patient);
    return newPatient;
  }
}

export default new PatientService();
