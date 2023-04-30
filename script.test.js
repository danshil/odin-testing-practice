import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from './script.js';

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

describe('caesarCipher', () => {
  it('should shift characters in the string', () => {
    expect(caesarCipher('abc', 1)).toEqual('bcd');
    expect(caesarCipher('hello world', 5)).toEqual('mjqqt btwqi');
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 10)).toEqual(
      'klmnopqrstuvwxyzabcdefghij'
    );
  });

  it('should wrap from z to a', () => {
    expect(caesarCipher('xyz', 1)).toEqual('yza');
    expect(caesarCipher('z', 1)).toEqual('a');
  });

  it('should keep the same case', () => {
    expect(caesarCipher('AbC', 1)).toEqual('BcD');
    expect(caesarCipher('HeLLo wORld', 5)).toEqual('MjQQt bTWqi');
  });

  it('should handle punctuation', () => {
    expect(caesarCipher('hello, world!', 5)).toEqual('mjqqt, btwqi!');
    expect(caesarCipher('hello?world', 5)).toEqual('mjqqt?btwqi');
  });
});

describe('analyzeArray', () => {
  it('should return an object with average, min, max, and length properties', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = analyzeArray(arr);
    expect(result).toHaveProperty('average');
    expect(result).toHaveProperty('min');
    expect(result).toHaveProperty('max');
    expect(result).toHaveProperty('length');
  });

  it('should calculate the average of the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = analyzeArray(arr);
    expect(result.average).toBe(3);
  });

  it('should find the minimum value in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = analyzeArray(arr);
    expect(result.min).toBe(1);
  });

  it('should find the maximum value in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = analyzeArray(arr);
    expect(result.max).toBe(5);
  });

  it('should return the length of the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = analyzeArray(arr);
    expect(result.length).toBe(arr.length);
  });

  it('should return an object with correct values for negative numbers', () => {
    const arr = [-1, -2, -3, -4, -5];
    const result = analyzeArray(arr);
    expect(result.average).toBe(-3);
    expect(result.min).toBe(-5);
    expect(result.max).toBe(-1);
    expect(result.length).toBe(arr.length);
  });

  it('should return an object with correct values for decimal numbers', () => {
    const arr = [1.5, 2.5, 3.5, 4.5, 5.5];
    const result = analyzeArray(arr);
    expect(result.average).toBe(3.5);
    expect(result.min).toBe(1.5);
    expect(result.max).toBe(5.5);
    expect(result.length).toBe(arr.length);
  });

  it('should return an object with correct values for an empty array', () => {
    const arr = [];
    const result = analyzeArray(arr);
    expect(result.average).toBeNaN();
    expect(result.min).toBeUndefined();
    expect(result.max).toBeUndefined();
    expect(result.length).toBe(arr.length);
  });
});
