import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type BarnAttributes = {
    id: number,
    name: string,
    about: string,
    domain: string,
    ownerId: number,
};

type BarnCreationAttributes = Optional<
    BarnAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Barn extends Model<BarnAttributes, BarnCreationAttributes> {
        declare id: CreationOptional<number>;
        declare name: string;
        declare about: string;
        declare domain: string;
        declare ownerId: number;


        static associate(models: any) {
            // Associations go here
            Barn.belongsTo(models.User, {
                foreignKey: "ownerId",
                onDelete: "cascade"
            });
        }
        // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

    }
    Barn.init(
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
                            throw new Error('Barn name must be between 1 - 30 characters');
                        }
                    },
                }
            },
            about: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 256) {
                            throw new Error('About must be between 1 - 256 characters');
                        }
                    },
                }
            },
            domain: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodDomain(value: string) {
                        if (value.startsWith("@")) {
                            throw new Error('Domain must start with @');
                        }
                    },
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 8) {
                            throw new Error('Domain must be between 1 - 8 characters');
                        }
                },
            }
        },
            ownerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            modelName: "Barn",
            defaultScope: {
                attributes: {
                    include: ["name","about","domain","ownerId", "createdAt", "updatedAt"]
                }
            },
        }
    )
    return Barn;
}
