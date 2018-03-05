const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },
        {
            id: '3',
            name: 'Trevor',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Trevor',
            room: 'Oilers Chat room'
        }
        var resUser = users.addUser(user.id, user.name, user.room );

        expect(users.users).toEqual([user]);

    });

    // remove user test cases
    it('should remove a user', () => {
        var removedUser = users.removeUser('1');
        expect(removedUser.id).toBe('1')
        expect(users.users.length).toEqual(2);
    });

    it('should Not remove a user', () => {
        var removedUser = users.removeUser('12334556');
        expect(removedUser).toNotExist();
        expect( users.users.length ).toEqual( 3 );
    });


    it('should find a user', () => {
        var foundUser = users.getUser('1');
        expect(foundUser.id).toEqual('1');
    });

    it('should Not find a user', () => {
        var foundUser = users.getUser('123445667');
        expect( foundUser ).toNotExist();
    });


    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Trevor']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);

    });

});
