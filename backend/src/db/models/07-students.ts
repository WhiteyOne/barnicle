import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type StudentAttributes = {
    id: number,
    firstName: string,
    lastName: string,
};

type StudentCreationAttributes = Optional<
    StudentAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Student extends Model<StudentAttributes, StudentCreationAttributes> {
        declare id: CreationOptional<number>;
        declare firstName: string;
        declare lastName: string;


        async getSafeStudent() {
            const safeStudent = {
                id: this.id,
                email: this.email,
                Studentname: this.Studentname,
                firstName: this.firstName,
                lastName: this.lastName,
            };
            return safeStudent
        }

        static associate(models: any) {
            // Associations go here
        }
        // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

    }
    Student.init(
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
        },
        {
            sequelize,
            modelName: "Student",
            defaultScope: {
            },
        }
    )
    return Student;
}
