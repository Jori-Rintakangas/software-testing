import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

describe('filter', () => {
    it('should return an empty array when given an empty array', () => {
      const result = filter([], () => true);
      expect(result).to.deep.equal([]);
    });
  
    it('should filter elements based on the provided predicate', () => {
     
      const predicate = (num) => num % 2 === 0;
  
      const inputArray = [1, 2, 3, 4, 5, 6];
      const result = filter(inputArray, predicate);
  
      expect(result).to.deep.equal([2, 4, 6]);
    });

    it('should filter objects based on a property value', () => {
      
        const predicate = (obj) => obj.type === 'fruit';
    
        const inputArray = [
          { type: 'fruit', name: 'apple' },
          { type: 'vegetable', name: 'carrot' },
          { type: 'fruit', name: 'banana' },
          { type: 'vegetable', name: 'broccoli' },
        ];
    
        const result = filter(inputArray, predicate);
    
        expect(result).to.deep.equal([
          { type: 'fruit', name: 'apple' },
          { type: 'fruit', name: 'banana' },
        ]);
    });
    it('should handle an array of objects with no matching objects', () => {
        
        const predicate = (obj) => obj.color === 'red';
    
        const inputArray = [
          { color: 'blue', shape: 'circle' },
          { color: 'green', shape: 'square' },
          { color: 'yellow', shape: 'triangle' },
        ];
    
        const result = filter(inputArray, predicate);
    
        expect(result).to.deep.equal([]);
      });
    
      it('should handle an array with objects of different shapes', () => {
        
        const predicate = (obj) => obj.shape !== undefined;
    
        const inputArray = [
          { color: 'red', shape: 'circle' },
          { color: 'blue', size: 'large' },
          { type: 'fruit', name: 'apple' },
        ];
    
        const result = filter(inputArray, predicate);
    
        expect(result).to.deep.equal([
          { color: 'red', shape: 'circle' }
        ]);
      });
  
    it('should return a new array and not modify the original array', () => {
      const inputArray = [1, 2, 3, 4, 5];
      const predicate = () => true;
  
      const result = filter(inputArray, predicate);
  
      expect(result).to.not.equal(inputArray); 
      expect(inputArray).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it('should filter based on the provided predicate for mixed data types', () => {
        
        const predicate = (value) => typeof value === 'string';
    
        const inputArray = [1, 'two', 3, 'four', true, { key: 'value' }, null, undefined];
        const result = filter(inputArray, predicate);
    
        expect(result).to.deep.equal(['two', 'four']);
      });
    
      it('should handle an array with all elements being of the same data type', () => {
        
        const predicate = (value) => typeof value === 'number';
    
        const inputArray = [1, 2, 3, 4, 5];
        const result = filter(inputArray, predicate);
    
        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
      });
    
      it('should handle an array with a mix of data types and a predicate that always returns true', () => {
        
        const predicate = () => true;
    
        const inputArray = [1, 'two', true, { key: 'value' }, null];
        const result = filter(inputArray, predicate);
    
        expect(result).to.deep.equal([1, 'two', true, { key: 'value' }, null]);
      });
    
      it('should handle an array with a mix of data types and a predicate that always returns false', () => {
        
        const predicate = (value) => false;
    
        const inputArray = [1, 'two', true, { key: 'value' }, null];
        const result = filter(inputArray, predicate);
    
        expect(result).to.deep.equal([]);
      });
  });
