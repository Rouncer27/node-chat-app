const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
    it('should reject non-string values', () => {
        var nonString = 7;
        var message  = isRealString(nonString);
        expect(message).toBe(false);
    });

    it('should reject strings with just spaces value', () => {
        var spaceString = '           ';
        var message  = isRealString(spaceString);
        expect(message).toBe(false);
    });

    it('should reject non-space values', () => {
        var nonSpaceString = '   L     O      T   R      ';
        var message  = isRealString(nonSpaceString);
        expect(message).toBe(true);
    });
});