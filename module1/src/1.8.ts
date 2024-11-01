{
    const user = {
        id: 123,
        name: {

            firstName: 'mahmud',
            secondName: 'tuhin',
        },
        contactNo: '129348'

    }

    const { contactNo, name: { secondName } } = user;

    // array destructuring 
    const myFriends = ['tuhin', 'mahmud', ' hasan', 'parvej', 'hasib']
    // const [a, , bestfriend, ...rest] = myFriends;
    const [a, b, , bestfriend, ...rest] = myFriends;














}