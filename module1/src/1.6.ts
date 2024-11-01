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



