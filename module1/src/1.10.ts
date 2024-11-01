// union type

// type FrontendDeveloper = 'fakibaz developer' | 'juniorDeveloper';

// const newDeveloper: FrontendDeveloper = 'juniorDeveloper'


// type User = {
//     name: string;
//     email?: string;
//     gender: 'male' | 'female';
//     bloodGroup: 'O+' | 'A+' | 'AB+'
// }

// const user1 = {
//     name: 'tuhin',
//     gender: 'male',
//     bloodGroup: 'A+'
// }

// interseptorse

type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
}

type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullStackDeveloper = {
    skills: ['html', 'css', 'express', 'node'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
} 
