var expect = require('expect');

var {generateMessage} = require('./message');

describe('generatesMessage', () => {
    it('should generate correct message object', () => {
        var message  = generateMessage('Trevor', 'this is trevor');

        expect(message.from).toBe('Trevor');
        expect(message.text).toBe('this is trevor');
        expect(typeof message.createdAt).toBe('number');
    })
});