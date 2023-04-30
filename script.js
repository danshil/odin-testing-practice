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

function caesarCipher(string, shift) {
  return string
    .split('')
    .map((char) => {
      let charCode = char.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + shift) % 26) + 97;
      } else if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + shift) % 26) + 65;
      }
      return String.fromCharCode(charCode);
    })
    .join('');
}

export { capitalize, reverseString, calculator, caesarCipher };
