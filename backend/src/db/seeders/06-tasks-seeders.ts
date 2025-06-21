'use strict';

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Tasks';
    return queryInterface.bulkInsert(options, [
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  
], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Tasks';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
