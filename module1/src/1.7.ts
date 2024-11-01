{
    // learn 
    /**
     * spreed operator
     * rest operator
     * destructuring
     * 
    */


    // learn spreed operator

    const bros1: string[] = ['tuhin', 'mahmud', 'hasan']
    const bros2: string[] = ['parvej', 'akash', 'hasib']

    bros1.push(...bros2)

    // more spreed  operator

    const mentor1 = {
        typScript: 'mesba',
        redux: 'mir',
        next: 'tanmoy'
    }
    const mentor2 = {
        mongoDb: 'jhankar',
        sql: 'mezba',
        noSgl: 'rahatul'
    }

    const mentorList = {
        ...mentor1,
        ...mentor2
    }

    // learn rest operator
    const greetFriends = (...friends: string[]){
        friends.forEach((friend: String) => console.log(`Hi ${friend}`))
    }

    greetFriends('hasib', 'ab raman', 'tuhin', 'parvj')








}