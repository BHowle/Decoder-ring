// Write your tests here!
const expect = require('chai').expect;
const polybius = require('../src/polybius').polybius;


describe("polybiusModule",() => {
    it("Should return false if given an odd length number as input", () =>{
        const actual = polybius('16784', false);
        expect(actual).to.be.false;
    });
    it("Should return false if given an odd length input after space removed", () => {
        const actual = polybius('11 22334', false);
        expect(actual).to.be.false;
    });
    it("Should return hello world if given 3251131343 2543241341, false", () =>{
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });
    it("Should return th(i/j)nkful if given 4432423352125413, false", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });
    it("Should return 4432423352125413 if given thinkful, true", () =>{
        const expected = "4432423352125413";
        const actual = polybius("thinkful", true);
        expect(actual).to.equal(expected);
    });
    it("Should return 3251131343 2543241341 if give Hello world", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    });
    it("Should return 2345 23513434112251 if given my message", () => {
        const expected = "2345 23513434112251";
        const actual = polybius("my message", true);
        expect(actual).to.equal(expected);
    })
})