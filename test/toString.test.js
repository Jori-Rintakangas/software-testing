import chai from "chai"
import toString from "../src/toString.js"
const expect = chai.expect

describe("toString", () => {
 it("convert an integer to string", () =>{
    expect(toString(3)).to.equal("3")
 });

 it("convert a string to string", () =>{
    expect(toString("This is a string")).to.equal("This is a string")
 });

 it("convert a float to string", () =>{
    expect(toString(3.14)).to.equal("3.14")
 });

 it("convert an array to string", () =>{
    expect(toString([1, 2, null, 3])).to.equal("1,2,,3")
 });

 it("convert a symbol to string", () =>{
    expect(toString(Symbol("test symbol"))).to.equal("Symbol(test symbol)")
 });

 it("convert minus zero to string", () =>{
    expect(toString(-0)).to.equal("-0")
 });

})
