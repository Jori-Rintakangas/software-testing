import chai from "chai"
import upperFirst from "../src/upperFirst.js";
const expect = chai.expect

describe("upperFirst", () => {
 it("convert an upper case to upper case", () =>{
    expect(upperFirst("Software testing")).to.equal("Software testing")
 });

 it("convert a lower case to upper case", () =>{
    expect(upperFirst("software testing")).to.equal("Software testing")
 });

 it("convert a single character to upper case", () =>{
    expect(upperFirst("a")).to.equal("A")
 });

 it("convert a string with unicode characters to upper case", () =>{
    expect(upperFirst("this is a smiley face \ud83d\ude00\u0000")).to.equal("This is a smiley face \ud83d\ude00\u0000")
 });

 it("convert an empty string to upper case", () =>{
   expect(upperFirst("")).to.equal("")
 });

 it("convert a string starting with a number to upper case", () =>{
   expect(upperFirst("1test")).to.equal("1test")
 });

})
