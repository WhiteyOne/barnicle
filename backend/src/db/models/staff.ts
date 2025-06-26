import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type StaffAttributes = {
    id: number,
    preferedName: string | null;
    role: string;
    userId: number;
    barnId: number;
};

type StaffCreationAttributes = Optional<
    StaffAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Staff extends Model<StaffAttributes, StaffCreationAttributes> {
        declare id: CreationOptional<number>;
        declare preferedName: string | null;
        declare role: string;
        declare userId: number;
        declare barnId: number;




        static associate(models: any) {
            Staff.belongsTo(models.Barn,{
                foreignKey:"barnId",
                onDelete:"cascade"
            })
            Staff.belongsTo(models.User, {
                foreignKey:"userId"
            })
        }
        // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

    }
    Staff.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            preferedName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 30) {
                            throw new Error('Prefered name must be between 1 - 30 characters');
                        }
                    },
                }
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 16) {
                            throw new Error('Role must be between 1 - 16 characters');
                        }
                    },
                }
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique:true
            },
            barnId: {
                type: DataTypes.STRING,
                allowNull: false,
                unique:true,
            },
        },
        {
            sequelize,
            modelName: "Staff",
            defaultScope: {
            },
        }
    )
    return Staff;
}
