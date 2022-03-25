import { Model, DataTypes } from "sequelize";
import DatabaseConnection from "../config/DatabaseConnection";

const dbConnection = new DatabaseConnection().dbConnection;

export default class PatientModel extends Model {
  private id!: number;
  private name!: string;
  private age!: number;
  private cpf!: string;
  private rg!: string;
  private birthDate!: string;
  private sex!: string;
  private sign!: string;
  private motherName!: string;
  private fatherName!: string;
  private email!: string;
  private password!: string;
  private zipCode!: string;
  private address!: string;
  private addressNumber!: number;
  private district!: string;
  private city!: string;
  private state!: string;
  private phone!: string;
  private mobilePhone!: string;
  private height!: string;
  private weight!: string;
  private bloodType!: string;
  private color!: string;
}

PatientModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      validate: {
        len: {
          args: [1, 255],
          msg: "Name must have at least a character.",
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: "",
      validate: {
        isInt: {
          msg: "Age must be a integer number.",
        },
      },
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      unique: true,
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      unique: true,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "",
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    sign: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    motherName: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    fatherName: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    zipCode: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    addressNumber: {
      type: DataTypes.INTEGER,
      defaultValue: "",
    },
    district: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    mobilePhone: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    height: {
      type: DataTypes.FLOAT,
      defaultValue: "",
    },
    weight: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    bloodType: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  {
    sequelize: dbConnection,
    tableName: "patient",
  }
);
