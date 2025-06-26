'use strict';

import { OptionsInterface } from "../../typings/seeders";

let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
  {
    firstName: "SpongeBob",
    lastName: "Squarepants",
    email: "spongebob@aa.io",
    username: "Spongebob",
    hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
  },
  {
    firstName: "Patrick",
    lastName: "Star",
    email: "Patrick@Star.com",
    username: "PatrickStar",
    hashedPassword: "$2a$10$3LIv4Lvl2vpNWiQceaGh0uabDJomSvSetIJanpEzualAkKd9Nbbmm"
  },
  {
    firstName: "Joe",
    lastName: "Smith",
    email: "demo@aa.io",
    username: "demo",
    hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
  },
  {
    firstName: "Summer",
    lastName: "Johnson",
    email: "summer@rugerranchin.com",
    username: "rugerranch",
    hashedPassword: "2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
  },
{
  firstName: "Squidward",
  lastName: "Tentacles",
  email: "squidward@aa.io",
  username: "SquidwardT",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Sandy",
  lastName: "Cheeks",
  email: "sandy@aa.io",
  username: "SandyCheeks",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Eugene",
  lastName: "Krabs",
  email: "krabs@aa.io",
  username: "MrKrabs",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Plankton",
  lastName: "Sheldon",
  email: "plankton@aa.io",
  username: "PlanktonS",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Gary",
  lastName: "Snail",
  email: "gary@aa.io",
  username: "GarySnail",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Karen",
  lastName: "Computer",
  email: "karen@aa.io",
  username: "KarenBot",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Pearl",
  lastName: "Krabs",
  email: "pearl@aa.io",
  username: "PearlK",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Larry",
  lastName: "Lobster",
  email: "larry@aa.io",
  username: "LarryLob",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Mermaid",
  lastName: "Man",
  email: "mermaidman@aa.io",
  username: "MermaidMan",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Barnacle",
  lastName: "Boy",
  email: "barnacleboy@aa.io",
  username: "BarnacleBoy",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Mrs.",
  lastName: "Puff",
  email: "puff@aa.io",
  username: "MrsPuff",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Flying",
  lastName: "Dutchman",
  email: "dutchman@aa.io",
  username: "FlyingDutch",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Bubble",
  lastName: "Bass",
  email: "bubblebass@aa.io",
  username: "BubbleBass",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Man",
  lastName: "Ray",
  email: "manray@aa.io",
  username: "ManRayVillain",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Fred",
  lastName: "Fish",
  email: "fred@aa.io",
  username: "MyLegFred",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Tom",
  lastName: "Anchovy",
  email: "tom@aa.io",
  username: "TomAnchovy",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
},
{
  firstName: "Nat",
  lastName: "Peterson",
  email: "nat@aa.io",
  username: "NatP",
  hashedPassword: "$2a$10$RWA3t0FVaTYW1AOKNz5La.3jZDoe0RRqfZ3GFIIrmuNxnjHS0bxu6"
}
], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
