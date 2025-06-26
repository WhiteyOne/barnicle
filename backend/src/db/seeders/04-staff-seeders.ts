'use strict';

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Staffs';
    return queryInterface.bulkInsert(options, [
  {
    preferedName: "Connor",
    role: "Wrangler",
    userId: 1,
    barnId:1,
  },
  {
    preferedName: "Spongebob",
    role: "Wrangler",
    userId: 2,
    barnId: 18
  },
  {
    preferedName: "Dave",
    role: "Farmer",
    userId: 3,
    barnId: 4
  },
  {
    preferedName: "Joe",
    role: "Owner",
    userId: 4,
    barnId: 1
  },
  {
    preferedName: "Summer",
    role: "In-house-doctor",
    userId: 5,
    barnId: 16
  },
  {
    preferedName: "Jess",
    role: "Volunteer",
    userId: 6,
    barnId: 7
  },
  {
    preferedName: "Sandy",
    role: "Wrangler",
    userId: 7,
    barnId: 19
  },
  {
    preferedName: "Mandy",
    role: "Farmer",
    userId: 8,
    barnId: 6
  },
  {
    preferedName: "Gary",
    role: "Volunteer",
    userId: 9,
    barnId: 14
  },
  {
    preferedName: "Ash",
    role: "In-house-doctor",
    userId: 10,
    barnId: 2
  },
  {
    preferedName: "Pearl",
    role: "Owner",
    userId: 11,
    barnId: 17
  },
  {
    preferedName: "Liv",
    role: "Volunteer",
    userId: 12,
    barnId: 8
  },
  {
    preferedName: "Dan",
    role: "Farmer",
    userId: 13,
    barnId: 13
  },
  {
    preferedName: "Mermaid",
    role: "Wrangler",
    userId: 14,
    barnId: 10
  },
  {
    preferedName: "Jim",
    role: "Owner",
    userId: 15,
    barnId: 5
  },
  {
    preferedName: "Dutchman",
    role: "In-house-doctor",
    userId: 16,
    barnId: 12
  },
  {
    preferedName: "Bubble",
    role: "Volunteer",
    userId: 17,
    barnId: 3
  },
  {
    preferedName: "Ray",
    role: "Wrangler",
    userId: 18,
    barnId: 15
  },
  {
    preferedName: "Fred",
    role: "Farmer",
    userId: 19,
    barnId: 11
  },
  {
    preferedName: "Tom",
    role: "Owner",
    userId: 20,
    barnId: 9
  },
  {
    preferedName: "Clo",
    role: "In-house-doctor",
    userId: 21,
    barnId: 17
  }

], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Staffs';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
