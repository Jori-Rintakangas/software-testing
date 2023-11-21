import chai from "chai"
import toString from "../src/toString.js"
const expect = chai.expect

describe("toString", () => {
 it("convert integer to string", () =>{
    expect(toString(3)).to.equal("3")
 });

 it("convert string to string", () =>{
   expect(toString("This is a string")).to.equal("This is a string")
 });

})