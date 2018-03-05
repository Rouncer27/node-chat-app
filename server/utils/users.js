[{
    id: 'sdlkhfksdj',
    name: 'Trevor',
    room: 'The Office Fans'
}]

// Add a user addUser(id, name, room)
// Remove user removeUser(id)
// Fetch a user getUser(id);
// Get user list getUserList(room)



class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = { id, name, room };
        this.users.push( user );
        return user;
    }

    removeUser (id) {
        var userRemoved = this.getUser(id);

        if( userRemoved ) {
            this.users = this.users.filter((user) => {
                return user.id !== id;
            })
        }

        return userRemoved;
    }

    getUser (id) {
        var foundUser = this.users.filter((user) => {
            return user.id === id;
        });

        return foundUser[0];
    }

    getUserList (room) {
        var users = this.users.filter((user) => {
            return user.room === room;
        });

        var namesArray = users.map((user) => {
            return user.name;
        });

        return namesArray;
    }
}




// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription () {
//         return `${this.name} is ${this.age}`;
//     }
// }

// var me = new Person('Trevor', 38);

// console.log(me.getUserDescription());

module.exports = {Users};