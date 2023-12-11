import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect

describe('ceil', () => {
    it('should round up a positive number to the nearest integer', () => {
      const result = ceil(4.006);
      expect(result).to.equal(5);
    });
  
    it('should round up a positive number to the specified precision', () => {
      const result = ceil(6.004, 2);
      expect(result).to.equal(6.01);
    });
  
    it('should round up a positive number to the nearest multiple of 10^precision', () => {
      const result = ceil(6040, -2);
      expect(result).to.equal(6100);
    });
  
    it('should round up a negative number to the nearest integer', () => {
      const result = ceil(-4.006);
      expect(result).to.equal(-4);
    });
  
    it('should round up a negative number to the specified precision', () => {
      const result = ceil(-6.004, 2);
      expect(result).to.equal(-6);
    });
  
    it('should round up a negative number to the nearest multiple of 10^precision', () => {
      const result = ceil(-6040, -2);
      expect(result).to.equal(-6000);
    });

    it('should handle precision being greater than the number of decimal places', () => {
      const result = ceil(543.21, 5);
      expect(result).to.equal(543.21);
    });
    it('should return NaN when the input is NaN', () => {
      const result = ceil(NaN);
      expect(result).to.be.NaN;
    });
    
    it('should return NaN when the input is undefined', () => {
      const result = ceil(undefined);
      expect(result).to.be.NaN;
    });
    
    it('should return NaN when the input is null', () => {
      const result = ceil(null);
      expect(result).to.be.NaN;
    });
    
    it('should return NaN when the input is undefined and precision is specified', () => {
      const result = ceil(undefined, 2);
      expect(result).to.be.NaN; 
    });
    
    it('should return NaN when the input is null and precision is specified', () => {
      const result = ceil(null, 2);
      expect(result).to.be.NaN; 
    });
    
  });