import chai from "chai"
import compact from "../src/compact.js"
const expect = chai.expect

describe('compact', () => {
    it('should remove falsey values from the array', () => {
      const inputArray = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
      const result = compact(inputArray);
  
      expect(result).to.deep.equal([1, 2, 3, 4]);
    });
  
    it('should handle an array with all falsey values', () => {
      const inputArray = [false, null, 0, '', undefined, NaN];
      const result = compact(inputArray);
  
      expect(result).to.deep.equal([]);
    });
    it('should handle an array with simple no falsey values', () => {
        const inputArray = [1, 'hello', true, 2, 3, -1, "-1", "1"];
        const result = compact(inputArray);
    
        expect(result).to.deep.equal([1, 'hello', true, 2, 3, -1, "-1", "1"]);
      });
  
    it('should handle an array with no falsey including objects', () => {
      const inputArray = [1, 'hello', true, { key: 'value' }];
      const result = compact(inputArray);
  
      expect(result).to.deep.equal([1, 'hello', true, { key: 'value' }]);
    });
  
    it('should return a new array and not modify the original array', () => {
      const inputArray = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
      const result = compact(inputArray);
  
      expect(result).to.not.equal(inputArray); // Check if a new array is returned
      expect(inputArray).to.deep.equal([0, 1, false, 2, '', 3, null, undefined, NaN, 4]); // Check if the original array is not modified
    });
  
    it('should handle an empty array', () => {
      const inputArray = [];
      const result = compact(inputArray);
  
      expect(result).to.deep.equal([]);
    });
  });