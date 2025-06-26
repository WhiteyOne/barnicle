"use strict";

import { OptionsInterface } from "../../typings/seeders";

let options: OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}

module.exports = {
    up: async (queryInterface: any, Sequelize: any) => {
        return queryInterface.createTable("Staffs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            preferedName: {
                type: Sequelize.STRING(30),
                allowNull:false
            },
            role: {
                allowNull:false,
                type: Sequelize.STRING(16)
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                refrence: { model: 'Users', key: 'id' },
                unique: true
            },
            barnId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                refrences: { model: 'Barns', key: 'id' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, options);
    },
    down: async (queryInterface: any, Sequelize: any) => {
        options.tableName = "Staffs";
        return queryInterface.dropTable(options);
    }
};
