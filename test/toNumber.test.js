import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect

describe("toNumber", () => {
 it("convert an integer to integer", () =>{
    expect(toNumber(3)).to.equal(3)
 });

 it("convert a string to float", () =>{
    expect(toNumber("3.2")).to.equal(3.2)
 });

 it("convert a symbol to NaN", () =>{
    expect(toNumber(Symbol())).to.be.NaN
 });

 it("convert an infinity to Infinity", () =>{
    expect(toNumber(Infinity)).to.equal(Infinity)
 });

 it("convert an object to integer", () =>{
    expect(toNumber(new Number("123"))).to.equal(123)
 });

 it("convert to smallest positive numeric value", () =>{
    expect(toNumber(Number.MIN_VALUE)).to.equal(5E-324)
 });

 it("convert an empty object to NaN", () =>{
    expect(toNumber({})).to.be.NaN
 });

 it("convert a binary string to integer", () =>{
    expect(toNumber("0b1110")).to.equal(14)
 });

 it("convert an octal string to integer", () =>{
    expect(toNumber("0o7")).to.equal(7)
 });

 it("convert a number object to integer", () =>{
    expect(toNumber(Object(0))).to.equal(0)
 });

 it("convert a signed hexadecimal string to NaN", () =>{
    expect(toNumber("-0xFF")).to.be.NaN
 });

})
