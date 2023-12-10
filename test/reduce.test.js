import chai from "chai"
import reduce from "../src/reduce.js"
const expect = chai.expect

describe('reduce', () => {
    it('should reduce an array of numbers without an initial accumulator', () => {
      const collection = [1, 2, 3, 4];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee);
  
      expect(result).to.equal(10);
    });
  
    it('should reduce an array of numbers with an initial accumulator', () => {
      const collection = [1, 2, 3, 4];
      const iteratee = (acc, value) => acc * value;
  
      const result = reduce(collection, iteratee, 2);
  
      expect(result).to.equal(48);
    });
  
    it('should reduce an array of objects using an initial accumulator', () => {
      const collection = [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
        { key: 'c', value: 3 },
      ];
  
      const iteratee = (acc, obj) => {
        acc[obj.key] = obj.value;
        return acc;
      };
  
      const result = reduce(collection, iteratee, {});
  
      expect(result).to.deep.equal({ a: 1, b: 2, c: 3 });
    });
  
    it('should handle an empty array without an initial accumulator', () => {
      const collection = [];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee);
  
      expect(result).to.be.undefined; 
    });
  
    it('should handle an empty array with an initial accumulator', () => {
      const collection = [];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee, 0);
  
      expect(result).to.equal(0); // Reducing an empty array with an initial accumulator should return the initial accumulator value
    });
  
    it('should handle a collection with a single element without an initial accumulator', () => {
      const collection = [42];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee);
  
      expect(result).to.equal(42); 
    });
  
    it('should handle a collection with a single element with an initial accumulator', () => {
      const collection = [42];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee, 10);
  
      expect(result).to.equal(52); 
    });
  
    it('should handle a collection with undefined values without an initial accumulator', () => {
      const collection = [1, undefined, 3, undefined];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee);
  
      expect(result).to.be.NaN; 
    });
  
    it('should handle a collection with undefined values with an initial accumulator', () => {
      const collection = [1, undefined, 3, undefined];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee, 0);
  
      expect(result).to.be.NaN;
    });
  
    it('should handle a collection with null values without an initial accumulator', () => {
      const collection = [1, null, 3, null];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee);
  
      expect(result).to.equal(4); 
    });
  
    it('should handle a collection with null values with an initial accumulator', () => {
      const collection = [1, null, 3, null];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee, 0);
  
      expect(result).to.equal(4); 
    });
  
    it('should handle a collection with NaN values without an initial accumulator', () => {
      const collection = [1, NaN, 3, NaN];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee);
  
      expect(result).to.be.NaN; 
    });
  
    it('should handle a collection with NaN values with an initial accumulator', () => {
      const collection = [1, NaN, 3, NaN];
      const iteratee = (acc, value) => acc + value;
  
      const result = reduce(collection, iteratee, 0);
  
      expect(result).to.be.NaN;
    });
  });
  