import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type AnimalAttributes = {
    id: number,
    name: string;
    type: string;
    rideable: boolean;
    barnId: number;
    doctorId: number;

};

type AnimalCreationAttributes = Optional<
    AnimalAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Animal extends Model<AnimalAttributes, AnimalCreationAttributes> {
        declare id: CreationOptional<number>;
        declare name: string;
        declare type: string;
        declare rideable: boolean;
        declare barnId: number;
        declare doctorId: number;

        static associate(models: any) {
            Animal.belongsTo(models.Barn, {
                foreignKey:"barnId",
                onDelete:"cascade"
            })
        }
        // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

    }
    Animal.init(
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
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 16) {
                            throw new Error('Type must be between 1 - 16 characters');
                        }
                    },
                }
            },
            rideable: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue:false
            },
            barnId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            doctorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
        },
        {
            sequelize,
            modelName: "Animal",
        }
    )
    return Animal;
}
