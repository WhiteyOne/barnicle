"use strict";

import { OptionsInterface } from "../../typings/seeders";

let options: OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable("Barns", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30),
        unique: true
      },
      about: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      domain: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(16)
      },
      previewImg:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
        refrences: { model: 'Users', key: 'id', as: 'Owner' }
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
    options.tableName = "Barns";
    return queryInterface.dropTable(options);
  }
};
