const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var string = isRealString(3);
        expect(string).toBe(false);
    });
    
    it('should reject string with only space', () => {
        var string = isRealString('   ');
        expect(string).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var string = isRealString('  ghj ');
        expect(string).toBe(true);
    });
});
