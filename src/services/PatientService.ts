import PatientModel from "../database/models/PatientModel";
import createError from "http-errors";
import { Op } from "sequelize";
import IPatient from "../interfaces/IPatient";

class PatientService {
  async index() {
    return await PatientModel.findAll();
  }

  async show(id: number) {
    const patient = await PatientModel.findByPk(id);

    if (!patient) throw new createError.NotFound("Patient not found.");
    return patient;
  }

  async create(patient: IPatient) {
    const { cpf, rg } = patient;

    const [createdPatient, isCreated] = await PatientModel.findOrCreate({
      where: {
        [Op.or]: [{ cpf }, { rg }],
      },
      defaults: {
        name: patient.name,
        age: patient.age,
        cpf: patient.cpf,
        rg: patient.rg,
        birthDate: patient.birthDate,
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
      },
    });

    return isCreated ? createdPatient : isCreated;
  }
}

export default new PatientService();
