'use strict';

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Doctors';
    return queryInterface.bulkInsert(options, [
  
], {
    firstName:"John", lastName:"hardy", specialty:"Horses", patientSlots:15, houseCalls:true, phone:"801-435-3939"
});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Doctors';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
