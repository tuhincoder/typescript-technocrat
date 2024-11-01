// reference type object

const user: {
    readonly company: 'Programming Hero'; // type ----> literal types
    firstName: string;
    // optional type
    middleName?: string;
    lastName: string;
    isMarried: boolean;
} = {
    company: "Programming Hero",
    firstName: 'mahmudul',
    // middleName: 'hasan',
    lastName: 'tuhin',
    isMarried: false,
}



const myFriends: {
    work: 'web developer',// types ---> literal types
    firstFriend: string;
    secondFriend?: string; // optional type
    thirdFriend: string;
    isAdmin: boolean;

} = {
    work: 'web developer',
    firstFriend: 'tuhin',
    // secondFriend: 'mahmud',
    thirdFriend: 'hasan',
    isAdmin: true,

}

