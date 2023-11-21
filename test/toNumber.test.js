import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect

describe("toNumber", () => {
 it("convert integer to integer", () =>{
    expect(toNumber(3)).to.equal(3)
 });

 it("convert string to float", () =>{
   expect(toNumber("3.2")).to.equal(3.2)
 });

})