const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message', () => {
        var from = "samlak";
        var text = "you are very stupid";
        var message = generateMessage(from, text);
        expect(message).toInclude({
            from, text
        });
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message', () => {
        var from = "Admin";
        var latitude = 5;
        var longitude = 50;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from, latitude, longitude);
        expect(message).toInclude({from, url});
        expect(message.createdAt).toBeA('number');
    });
});