const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message', () => {
        var from = "samlak";
        var text = "you are very stupid";
        var message = generateMessage(from, text);
        expect(message).toInclude({
            from, text
        });
        expect(message.createdAt).toBeA('number');
        
    })
})