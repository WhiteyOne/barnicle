

export interface OptionsInterface {
    schema?: string;
    tableName?: string;
}


export interface User {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    hashedPassword: string;
}

export interface Barn {
    name: string;
    about: string;
    domain: string;
    ownerId: number; //this will ref user account
}
export interface Doctor {
    firstName: string;
    lastName: string;
    specialty: string;
    patientSlots: number;
    houseCalls: boolean;
    phone: string;
}
export interface Staff {
    preferedName: string;
    role: string;
    userId: string; //this will ref the user id but can be null
    barnId: number;
}
export interface Animal {
    name: string;
    type: string;
    rideable: boolean;
    // cleaned: string;//this will be a string date
    barnId: number;
    doctorId: number;
}
export interface Task {
    name: string;
    description: string;
    completed: boolean;
    staffId: number | null;
    animalId: number;
    barnId: number;
}
export interface Student {
    name: string;
    age: number;
    experience: number;
    staffId: number;
    animalId: number;
}