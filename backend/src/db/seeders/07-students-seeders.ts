'use strict';

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Students';
    return queryInterface.bulkInsert(options, [
  {
    name: "Summer",
    age: 30,
    experience: 25,
    staffId: 1,
    animalId: 1
  },

], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Students';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
