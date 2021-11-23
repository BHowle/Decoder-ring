// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution').substitution;

describe("substitutionModule", () => {
    it("Should return false if given no alphabet", () => {
        const actual = substitution("any");
        expect(actual).to.be.false;
    });
    it("Should return false if given an alphabet not equal 26 letters", () => {
        const actual = substitution("any", "qwertyuiopjklzxcvbnm,");
        expect(actual).to.be.false;
    });
    it("Should return false if given repeated characters", () => {
        const actual = substitution("any", "qqertyuiopasdfggjklzxcvbnm");
        expect(actual).to.be.false;
    });
    it("Should return jrufscpw if given thinkful and xoyqmcgrukswaflnthdjpzibev", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev", true);
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });
    it("Shoule return elp xhm xf mbymwwmfj dne", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.equal(expected);
    });
    it("Should return thinkful when given jrufscpw", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });
    it("Should return message when given y&ii$r&", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    })
})