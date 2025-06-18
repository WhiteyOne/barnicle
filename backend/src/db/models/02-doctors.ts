import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type DoctorAttributes = {
    id: number,
    firstName: string,
    lastName: string,
    specialty: string,
    patientSlots: string,
    houseCalls: boolean,
    phone: string;
};

type DoctorCreationAttributes = Optional<
    DoctorAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Doctor extends Model<DoctorAttributes, DoctorCreationAttributes> {
        declare id: number;
        declare firstName: string;
        declare lastName: string;
        declare specialty: string;
        declare patientSlots: number;
        declare houseCalls: boolean;
        declare phone: string;

        static associate(models: any) {
            // Associations go here
        }
        // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

    }
    Doctor.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 30) {
                            throw new Error('First name must be between 1 - 30 characters');
                        }
                    },
                }
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 30) {
                            throw new Error('Last name must be between 1 - 30 characters');
                        }
                    },
                }
            },
            specialty: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 30) {
                            throw new Error('specialty name must be between 1 - 30 characters');
                        }
                    },
                }
            },
            patientSlots: {
                type: DataTypes.INTEGER,
                allowNull: false,
                },
            houseCalls:{
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            phone:{
                type:DataTypes.STRING,
            }
        },
        {
            sequelize,
            modelName: "Doctor",
            defaultScope: {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            },
        }
    )
    return Doctor;
}
