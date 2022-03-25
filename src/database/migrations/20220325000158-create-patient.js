"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("patient", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: "birth_date",
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sign: {
        type: Sequelize.STRING,
      },
      motherName: {
        type: Sequelize.STRING,
        field: "mother_name",
      },
      fatherName: {
        type: Sequelize.STRING,
        field: "father_name",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zipCode: {
        type: Sequelize.STRING,
        field: "zip_code",
      },
      address: {
        type: Sequelize.STRING,
      },
      addressNumber: {
        type: Sequelize.INTEGER,
        field: "address_number",
      },
      district: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      mobilePhone: {
        type: Sequelize.STRING,
        field: "mobile_phone",
      },
      height: {
        type: Sequelize.FLOAT,
      },
      weight: {
        type: Sequelize.STRING,
      },
      bloodType: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "blood_type",
      },
      color: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("patient");
  },
};
