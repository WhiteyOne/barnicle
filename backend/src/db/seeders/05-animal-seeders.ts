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
  {
    name: "Caly",
    type: "Goat",
    rideable: false,
    barnId: 16,
    doctorId: 1
  },
  {
    name: "Mo",
    type: "Rabbit",
    rideable: false,
    barnId: 8,
    doctorId: 1
  },
  {
    name: "Babe",
    type: "Donkey",
    rideable: true,
    barnId: 12,
    doctorId: 1
  },
  {
    name: "Wooly",
    type: "Sheep",
    rideable: false,
    barnId: 5,
    doctorId: 1
  },
  {
    name: "Billy",
    type: "Pig",
    rideable: false,
    barnId: 18,
    doctorId: 1
  },
  {
    name: "Ducky",
    type: "Duck",
    rideable: false,
    barnId: 2,
    doctorId: 1
  },
  {
    name: "Clucky",
    type: "Chicken",
    rideable: false,
    barnId: 15,
    doctorId: 1
  },
  {
    name: "Ears",
    type: "Guinea Pig",
    rideable: false,
    barnId: 9,
    doctorId: 1
  },
  {
    name: "Humphrey",
    type: "Llama",
    rideable: true,
    barnId: 3,
    doctorId: 1
  },
  {
    name: "Paddy",
    type: "Alpaca",
    rideable: false,
    barnId: 11,
    doctorId: 1
  },
  {
    name: "Feathers",
    type: "Turkey",
    rideable: false,
    barnId: 6,
    doctorId: 1
  },
  {
    name: "Hissy",
    type: "Goose",
    rideable: false,
    barnId: 14,
    doctorId: 1
  },
  {
    name: "Fluffy",
    type: "Horse",
    rideable: true,
    barnId: 2,
    doctorId: 1
  },
  {
    name: "Alfie",
    type: "Cow",
    rideable: false,
    barnId: 17,
    doctorId: 1
  },
  {
    name: "Spotty",
    type: "Goat",
    rideable: false,
    barnId: 8,
    doctorId: 1
  },
  {
    name: "Grumpy",
    type: "Sheep",
    rideable: false,
    barnId: 10,
    doctorId: 1
  },
  {
    name: "Rammy",
    type: "Pig",
    rideable: false,
    barnId: 16,
    doctorId: 1
  },
  {
    name: "Daisy",
    type: "Rabbit",
    rideable: false,
    barnId: 4,
    doctorId: 1
  },
  {
    name: "Peggy",
    type: "Donkey",
    rideable: true,
    barnId: 13,
    doctorId: 1
  },
  {
    name: "Brownie",
    type: "Duck",
    rideable: false,
    barnId: 18,
    doctorId: 1
  },
  {
    name: "Bessie",
    type: "Chicken",
    rideable: false,
    barnId: 1,
    doctorId: 1
  },
  {
    name: "Shaun",
    type: "Guinea Pig",
    rideable: false,
    barnId: 11,
    doctorId: 1
  },
  {
    name: "Gus",
    type: "Llama",
    rideable: true,
    barnId: 7,
    doctorId: 1
  },
  {
    name: "Quackers",
    type: "Alpaca",
    rideable: false,
    barnId: 9,
    doctorId: 1
  },
  {
    name: "Henny",
    type: "Turkey",
    rideable: false,
    barnId: 3,
    doctorId: 1
  },
  {
    name: "Stubby",
    type: "Goose",
    rideable: false,
    barnId: 15,
    doctorId: 1
  },
  {
    name: "Sandy",
    type: "Horse",
    rideable: true,
    barnId: 14,
    doctorId: 1
  },
  {
    name: "Hoppy",
    type: "Cow",
    rideable: false,
    barnId: 6,
    doctorId: 1
  },
  {
    name: "Gobbler",
    type: "Goat",
    rideable: false,
    barnId: 17,
    doctorId: 1
  },
  {
    name: "Mama Goose",
    type: "Sheep",
    rideable: false,
    barnId: 12,
    doctorId: 1
  }


  
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
