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
  {
    firstName: "Gary",
    lastName: "patrick",
    specialty: "Horse",
    patientSlots: 5,
    houseCalls: true,
    phone:"801-599-8778"
  },
], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Doctors';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
