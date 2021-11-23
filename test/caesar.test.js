// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar').caesar;

describe("caesarModule", () => {
    it("Should return false if a shift of 0 is given", () =>{
        const actual = caesar('Thinkful', 0);
        expect(actual).to.be.false;
    });
    it("Should return false if a shift greater than 24 is given", () =>{
        const actual = caesar('Thinkful', 25);
        expect(actual).to.be.false;
    });
    it("Should return false if a shift less than -24 is given", () =>{
        const actual = caesar('Thinkful', -25);
        expect(actual).to.be.false;
    });
    it("Should return encoded value of wklqnixo if given thinkful, 3", () =>{
        const expected = 'wklqnixo';
        const actual = caesar('thinkful', 3);
        expect(actual).to.equal(expected);
    });
    it("Should return decoded value of thinkful if given wklqnixo, 3, false", () => {
        const expected = 'thinkful';
        const actual = caesar('wklqnixo', 3, false);
        expect(actual).to.equal(expected);
    });
    it("Should return decoded value of this is a secret message! if given BPQA qa I amkzmb umaaiom!, 8, false", () => {
        const expected = 'this is a secret message!';
        const actual = caesar('BPQA qa I amkzmb umaaiom!', 8, false);
        expect(actual).to.equal(expected);
    });
    it("Should return bpqa qa i amkzmb umaaiom! if given this is a secret message!, 8, true", () =>{
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar('this is a secret message!', 8, true);
        expect(actual).to.equal(expected);
    })
})

