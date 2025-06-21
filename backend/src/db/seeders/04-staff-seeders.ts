'use strict';

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Staff';
    return queryInterface.bulkInsert(options, [
  {
    preferedName: "Connor",
    role: "Wrangler",
    userId: 2,
    barnId:1,
  },
], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Staff';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
