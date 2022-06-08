const errorTxt = 'The Number of characters needs to be in range (1,10), including 1 and 10';

const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return  string.length
  }
  else {
    throw new Error(errorTxt)
  }
}

const reverseString = (string) => {
  return string.split("").reverse().join("");
}

class Calculator {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }

  add () {
    return this.a + this.b;
  }

  subtract () {
    return this.a - this.b;
  }

  multiply () {
    return this.a * this.b;
  }

  divide () {
    return this.a / this.b;
  }
}

capitalize = (string) => {
  return string.trim().replace(/^\w/, (c) => c.toUpperCase());
}


module.exports = { stringLength, errorTxt, reverseString, Calculator, capitalize };