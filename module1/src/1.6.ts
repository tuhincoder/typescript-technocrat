// learning function
// normal function
// arrow function

// {implicitly}
// function add(num1, num2) {
//     return num1 + num2
// }

// add(5, 8)


function add(num1: number, num2: number = 10): number {
    return num1 + num2;

}
add(40, 50)

const addArrow = (number1: number, number2: number = 54): number => number1 + number2;


const stringArray = (str1: string, str2: string = 'mahmudul'): string => str1 + str2;



// object ar modde kono function thakle take method bole


const poorUser = {
    name: 'tuhin',
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance;
    }
}


const richMan = {
    name: 'elon musk',
    balance: 4000,
    addBalance(balance: number) {
        return `elon musk new balance: ${this.balance + balance}`
    }
}


// const arr: number[] = [1, 2, 3, 4]

// const newArray: number[] = arr.map((elem: number): number => elem * elem)

// squire number in array
// const arr: number[] = [2, 4, 56, 6]

// const newArray : number[] = arr.map((elem :number): number =>  elem* elem)


// squire array

// const arr: number[] = [1, 2, 34, 5]

// const newArray: number[] = arr.map((elem: number): number => elem * elem)
// 

// squire 

const arr: number[] = [1, 2, 3, 45, 6]
const newArray: number[] = arr.map((elem: number): number => elem * elem)
