import chai from "chai"
import toInteger from "../src/toInteger.js"
const expect = chai.expect

describe("toInteger", () => {
 it("convert an integer to integer", () =>{
    expect(toInteger(3)).to.equal(3)
 });

 it("convert a negative integer to integer", () =>{
    expect(toInteger(-3)).to.equal(-3)
 });

 it("convert a null to integer", () =>{
    expect(toInteger(null)).to.equal(0)
 });

 it("convert a signed zero to integer", () =>{
    expect(toInteger(-0)).to.equal(0)
 });

 it("convert a string to integer", () =>{
    expect(toInteger("3.2")).to.equal(3)
 });

 it("convert a float to integer", () =>{
    expect(toInteger(3.2)).to.equal(3)
 });

 it("convert a symbol to integer", () =>{
    expect(toInteger(Symbol())).to.equal(0)
 });

 it("convert an Infinity to integer", () =>{
    expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308)
 });

 it("convert a minus Infinity to integer", () =>{
    expect(toInteger(-Infinity)).to.equal(-1.7976931348623157e+308)
 });

 it("convert a number object to integer", () =>{
    expect(toInteger(new Number("123"))).to.equal(123)
 });

 it("convert smallest positive numeric value to integer", () =>{
    expect(toInteger(Number.MIN_VALUE)).to.equal(0)
 });

 it("convert an empty object to integer", () =>{
    expect(toInteger({})).to.equal(0)
 });

})
