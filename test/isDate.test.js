import chai from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect

describe("isDate", () => {
 it("check that a Date object is a date", () =>{
    expect(isDate(new Date("October 13, 2014 11:13:00"))).to.be.true
 });

 it("check that string date is not a date", () =>{
    expect(isDate("Mon April 23 2012")).to.be.false
 });

 it("check that null is not a date", () =>{
    expect(isDate(null)).to.be.false
 });

 it("check that undefined is not a date", () =>{
    expect(isDate(undefined)).to.be.false
 });

 it("check that an empty object is not a date", () =>{
    expect(isDate({})).to.be.false
 });

 it("check that a boolean is not a date", () =>{
   expect(isDate(true)).to.be.false
 });

})
