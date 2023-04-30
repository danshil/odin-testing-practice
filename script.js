function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  return firstLetter + string.substring(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  },
  multiply: (a, b) => a * b,
};

export { capitalize, reverseString, calculator };
