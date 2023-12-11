import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect

describe('isEmpty', () => {
    it('should return true for an empty object', () => {
      const result = isEmpty({});
      expect(result).to.be.true;
    });
  
    it('should return true for an empty array', () => {
      const result = isEmpty([]);
      expect(result).to.be.true;
    });
  
    it('should return true for an empty string', () => {
      const result = isEmpty('');
      expect(result).to.be.true;
    });
  
    it('should return true for an empty map', () => {
      const result = isEmpty(new Map());
      expect(result).to.be.true;
    });
  
    it('should return true for an empty set', () => {
      const result = isEmpty(new Set());
      expect(result).to.be.true;
    });
  
    it('should return true for an empty buffer', () => {
      const result = isEmpty(Buffer.alloc(0));
      expect(result).to.be.true;
    });
  
    it('should return true for an empty arguments object', () =>  {
      function testFunction() {
        const result = isEmpty(arguments);
        expect(result).to.be.true;
      }
  
      testFunction();
    });
  
    it('should return false for a non-empty object', () => {
      const result = isEmpty({ key: 'value' });
      expect(result).to.be.false;
    });
  
    it('should return false for a non-empty array', () => {
      const result = isEmpty([1, 2, 3]);
      expect(result).to.be.false;
    });
  
    it('should return false for a non-empty string', () => {
      const result = isEmpty('hello');
      expect(result).to.be.false;
    });
  
    it('should return false for a non-empty map', () => {
      const result = isEmpty(new Map([[1, 'one']]));
      expect(result).to.be.false;
    });
  
    it('should return false for a non-empty set', () => {
      const result = isEmpty(new Set([1, 2, 3]));
      expect(result).to.be.false;
    });
  
    it('should return false for a non-empty buffer', () => {
      const result = isEmpty(Buffer.from('hello'));
      expect(result).to.be.false;
    });
  
    it('should return false for a non-empty arguments object', () => {
      function testFunction() {
        const result = isEmpty(arguments);
        expect(result).to.be.false;
      }
  
      testFunction(1, 2, 3);
    });
  
    it('should return true for a custom object with no own enumerable properties', () => {
      const customObject = Object.create(null);
      const result = isEmpty(customObject);
      expect(result).to.be.true;
    });
  
    it('should return false for a custom object with own enumerable properties', () => {
      const customObject = { key: 'value' };
      const result = isEmpty(customObject);
      expect(result).to.be.false;
    });
    it("should return true for null", () => {
        expect(isEmpty(null)).to.be.true
    })
  });