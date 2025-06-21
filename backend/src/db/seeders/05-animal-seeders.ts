'use strict';

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Animals';
    return queryInterface.bulkInsert(options, [
  {
    name: "Caly",
    type: "Horse",
    rideable: true,
    barnId: 1,
    doctorId: 1
  },
  
], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Animals';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
