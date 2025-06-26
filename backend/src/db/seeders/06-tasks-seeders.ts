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
  {
    name: "Feeding",
    description: "Read the chart for the assigned animal to make sure they are given the proper feed and supliments",
    completed: false,
    staffId: 2,
    animalId: 3,
    barnId:1
  },
  {
    name: "inventory",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
  {
    name: "Picking",
    description: "using a pitch fork pick the horse poop and pee from the stall. Throw extra shavings if nessicary.",
    completed: false,
    staffId: 1,
    animalId: 1,
    barnId:1
  },
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
