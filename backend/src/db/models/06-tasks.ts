import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type TaskAttributes = {
    id: number,
    name: string,
    description: string,
    completed: boolean,
    barnId: number,
    staffId: number,
    animalId: number,
};

type TaskCreationAttributes = Optional<
    TaskAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Task extends Model<TaskAttributes, TaskCreationAttributes> {
        declare id: CreationOptional<number>;
        declare name: string;
        declare description: string;
        declare completed: boolean;
        declare barnId: number;
        declare staffId: number;
        declare animalId: number;


        

        static associate(models: any) {
            // Associations go here
        }
        // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

    }
    Task.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 30) {
                            throw new Error('Name must be between 1 - 30 characters');
                        }
                    },
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 150) {
                            throw new Error('Description must be between 1 - 150 characters');
                        }
                    },
                }
            },
            completed: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue:false
            },
            barnId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            staffId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
            animalId:{
                type: DataTypes.INTEGER
            }
        },
        {
            sequelize,
            modelName: "Task",
            defaultScope: {
            },
        }
    )
    return Task;
}
