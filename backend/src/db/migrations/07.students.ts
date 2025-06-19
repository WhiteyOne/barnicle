"use strict";

import { OptionsInterface } from "../../typings/seeders";

let options: OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      age: {
        alowNull: false,
        type: Sequelize.Integer
      },
      experience: {
        type: Sequelize.Integer
      },
      staffId: {
        type: Sequelize.Integer,
        allowNull: false,
        refrences: { model: 'Staff', key: 'id' }
      },
      animalId: {
        type: Sequelize.Integer,
        refrences: { model: 'Animals', key: 'id' }
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
  down: async (queryInterface: any, Sequelize: any) => {
    options.tableName = "Students";
    return queryInterface.dropTable(options);
  }
};
