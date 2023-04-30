import { capitalize, reverseString, calculator } from './script.js';

describe('capitalize', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('world')).toEqual('World');
  });

  it('should handle empty string', () => {
    expect(capitalize('')).toEqual('');
  });

  it('should handle strings with one character', () => {
    expect(capitalize('a')).toEqual('A');
  });

  it('should handle strings with whitespace', () => {
    expect(capitalize(' hello world ')).toEqual(' hello world ');
    expect(capitalize('    hello world')).toEqual('    hello world');
  });

  it('should handle strings with numbers and symbols', () => {
    expect(capitalize('123abc')).toEqual('123abc');
    expect(capitalize('!@#$%')).toEqual('!@#$%');
    expect(capitalize('a1b2c3!@#')).toEqual('A1b2c3!@#');
  });
});

describe('reverseString', () => {
  it('should return a reversed string', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('world')).toEqual('dlrow');
  });

  it('should handle empty string', () => {
    expect(reverseString('')).toEqual('');
  });

  it('should handle strings with one character', () => {
    expect(reverseString('a')).toEqual('a');
  });

  it('should handle strings with whitespace', () => {
    expect(reverseString(' hello world ')).toEqual(' dlrow olleh ');
  });
});

describe('calculator', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(calculator.add(1, 2)).toEqual(3);
      expect(calculator.add(-1, 2)).toEqual(1);
      expect(calculator.add(0, 0)).toEqual(0);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(calculator.subtract(3, 2)).toEqual(1);
      expect(calculator.subtract(5, -2)).toEqual(7);
      expect(calculator.subtract(0, 0)).toEqual(0);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(calculator.divide(6, 2)).toEqual(3);
      expect(calculator.divide(10, -2)).toEqual(-5);
      expect(calculator.divide(0, 1)).toEqual(0);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(calculator.multiply(3, 2)).toEqual(6);
      expect(calculator.multiply(-2, -2)).toEqual(4);
      expect(calculator.multiply(0, 1)).toEqual(0);
    });
  });
});
