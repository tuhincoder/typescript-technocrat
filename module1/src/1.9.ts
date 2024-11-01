//  alias


// alias type

type Student = {
    name: string;
    age: number;
    gender: string;
    address: string

}



const student1: Student = {
    name: 'tuhin',
    age: 23,
    gender: 'male',
    address: 'dhaka'

}
const student2: Student = {
    name: 'tuhin',
    age: 23,
    gender: 'male',
    address: 'dhaka'
}


//  more example alias types

type UserName = string;

const userName: UserName = 'tuhin'

type Age = number;
const myAge: Age = 38;

type IsAdmin = boolean;
const admin: IsAdmin = false