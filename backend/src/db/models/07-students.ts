import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type StudentAttributes = {
    id: number,
    name: string,
    age: number,
    experience: number | null,
    staffId: number,
    animalId: number|null,

};

type StudentCreationAttributes = Optional<
    StudentAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Student extends Model<StudentAttributes, StudentCreationAttributes> {
        declare id: CreationOptional<number>;
        declare name: string;
        declare age: number;
        declare experience: number | null;
        declare staffId: number;
        declare animalId: number|null;


        static associate(models: any) {
            
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
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 30) {
                            throw new Error('name must be between 1 - 30 characters');
                        }
                    },
                }
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate:{
                    min:4
                }
            },
            experience:{
                type: DataTypes.INTEGER,
            },
            staffId:{
                type: DataTypes.INTEGER,
                allowNull:false,
            },
            animalId:{
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "Student",
        }
    )
    return Student;
}
