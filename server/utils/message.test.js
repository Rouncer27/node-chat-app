var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generatesMessage', () => {
    it('should generate correct message object', () => {
        var message  = generateMessage('Trevor', 'this is trevor');

        expect(message.from).toBe('Trevor');
        expect(message.text).toBe('this is trevor');
        expect(typeof message.createdAt).toBe('number');
    })
});

describe('generatesMessage', () => {
    it('should generate correct location message object', () => {
        var name = 'Trevor';
        var lat = '51.290560799999994';
        var lon = '-114.0266358';
        var url = `https://www.google.com/maps?q=${lat},${lon}`;
        var message  = generateLocationMessage(name, lat, lon);

        
        expect(message.from).toBe(name);
        expect(message.url).toBe(url);
        expect(typeof message.createdAt).toBe('number');
    })
});