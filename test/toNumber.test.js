import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect

describe("toNumber", () => {
 it("convert an integer to number", () =>{
    expect(toNumber(3)).to.equal(3)
 });

 it("convert a string to number", () =>{
    expect(toNumber("3.2")).to.equal(3.2)
 });

 it("convert a symbol to number", () =>{
    expect(toNumber(Symbol())).to.be.NaN
 });

 it("convert an Infinity to number", () =>{
    expect(toNumber(Infinity)).to.equal(Infinity)
 });

 it("convert an object to number", () =>{
    expect(toNumber(new Number("123"))).to.equal(123)
 });

 it("convert smallest positive numeric value to number", () =>{
    expect(toNumber(Number.MIN_VALUE)).to.equal(5E-324)
 });

 it("convert an empty object to number", () =>{
    expect(toNumber({})).to.be.NaN
 });

 it("convert a binary string to number", () =>{
    expect(toNumber("0b1110")).to.equal(14)
 });

 it("convert an octal string to number", () =>{
    expect(toNumber("0o7")).to.equal(7)
 });

 it("convert a number object to number", () =>{
    expect(toNumber(Object(0))).to.equal(0)
 });

 it("convert a signed hexadecimal string to number", () =>{
    expect(toNumber("-0xFF")).to.be.NaN
 });

 it("convert undefined to number", () =>{
   expect(toNumber(undefined)).to.be.NaN
 });

})
