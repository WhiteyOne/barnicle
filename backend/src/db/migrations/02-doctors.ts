"use strict";

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    return queryInterface.createTable("Doctors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull:false,
        type: Sequelize.STRING(30)
      },
      lastName: {
        allowNull:false,
        type: Sequelize.STRING(30)
      },
      specialty: {
        allowNull:false,
        type: Sequelize.STRING(30),
        default: "General"
      },
      patientSlots:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      houseCalls:{
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      phone: {
        allowNull:false,
        type: Sequelize.STRING(10,14),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = "Doctors";
    return queryInterface.dropTable(options);
  }
};
