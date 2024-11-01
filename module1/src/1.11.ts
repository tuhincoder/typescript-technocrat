{
    //

    // ternary operator ||  optional chaining || nullish coalescing operator

    const age: number = 18;

    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    // console.log({ isAdult });


    const isAuthentication = '';

    const result1 = isAuthentication ?? 'Guest';
    const result2 = isAuthentication ? isAuthentication : 'Guest'
    // console.log({ result1 }, { result2 });

    const isAdmin = null;
    const checkAdmin = isAdmin ?? 'yes Admin'
    // console.log(checkAdmin);


    type User = {
        name: string;
        address: {
            city: string;
            road: number;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'tuhin',
        address: {
            city: 'dhaka',
            road: 23 / 45,
            presentAddress: 'bogura',
            // permanentAddress: 'uttara',
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address'
    console.log({ permanentAddress });


    //
}