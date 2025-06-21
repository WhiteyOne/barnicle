"use strict";

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    return queryInterface.createTable("Tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING(30),
      },
      description: {
        alowNull: false,
        type: Sequelize.STRING(150)
      },
      completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default:false
      },
      staffId: {
        type: Sequelize.INTEGER,
        refrences: {model:"Staff", key:"id"}
      },
      barnId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        refrences: {model:"Barns",key:"id" }
      },
      animalId:{
        type: Sequelize.INTEGER,
        refrences: {model:"Animal", key:"id"}
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
    options.tableName = "Tasks";
    return queryInterface.dropTable(options);
  }
};
