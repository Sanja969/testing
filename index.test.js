const examples = require('./index');

const error = examples.errorTxt;


describe('Characters\' counter. The Number of characters needs to be in range (1,10), including 1 and 10', () => {

  test('length of "sanja" to be 5', () => {
    //Arrange
    const string = 'sanja';
    
    //Act
    const count = examples.stringLength(string);

    //Assert`
    expect(count).toBe(5); 
  });

  test('"Beautiful day today" to throw error', () => {
    //Arrange
    let string = 'Beautiful day today';

    //Act
    const callStrLength = () => examples.stringLength(string);

    //Assert`
    expect(callStrLength).toThrow(error);
  });

  test('"" to throw error', () => {
    //Arrange
    let string = '';

    //Act
    const callStrLength = () => examples.stringLength(string);

    //Assert`
    expect(callStrLength).toThrow(error);
  });
});

describe('Reverse string checker', () => {

  test('reverse of "sanja" to be "ajnas"', () => {
    //Arrange
    const string = 'sanja';
    
    //Act
    const reverse = examples.reverseString(string);

    //Assert`
    expect(reverse).toEqual('ajnas');
  });

  test('reverse of "" to be ""', () => {
    //Arrange
    const string = '';
    
    //Act
    const reverse = examples.reverseString(string);

    //Assert`
    expect(reverse).toEqual('');
  });

  test('reverse of "ana" to be "ana"', () => {
    //Arrange
    const string = 'ana';
    
    //Act
    const reverse = examples.reverseString(string);

    //Assert`
    expect(reverse).toEqual('ana');
  });

});

describe('Add method checker', () => {

  test('4 plus one to be 5', () => {
    //Arrange
    const a = 4;
    const b = 1;
    calculator = new examples.Calculator(a, b);
    
    //Act
    const add = calculator.add();

    //Assert`
    expect(add).toEqual(5);
  });

  test('0 plus -1.9 to be -1', () => {
    //Arrange
    const a = 0;
    const b = -1.9;
    calculator = new examples.Calculator(a, b);
    
    //Act
    const add = calculator.add();

    //Assert`
    expect(add).toBeCloseTo(-1.9);
  });
});

describe('subtract method checker', () => {
  test('4.5 minus 5 to be -0.5', () => {
    //Arrange
    const a = 4.5;
    const b = 5;
    calculator = new examples.Calculator(a, b);

    //Act
    const subtract = calculator.subtract();

    //Assert`
    expect(subtract).toBeCloseTo(-0.5);
  });

  test('0 minus 5 to be minus 5', () => {
    //Arrange
    const a = 0;
    const b = 5;
    calculator = new examples.Calculator(a, b);

    //Act
    const subtract = calculator.subtract();

    //Assert`
    expect(subtract).toEqual(-5);
  });
});

describe('multiple method checker', () => {
test('4 multiple 5 to be 20', () => {
  //Arrange
  const a = 4;
  const b = 5;
  calculator = new examples.Calculator(a, b);
  
  //Act
  const subtract = calculator.multiply();

  //Assert`
  expect(subtract).toEqual(20);
});

test('4 multiple 5.2 to be 20.8', () => {
  //Arrange
  const a = 4;
  const b = 5.2;
  calculator = new examples.Calculator(a, b);
  
  //Act
  const subtract = calculator.multiply();

  //Assert`
  expect(subtract).toBeCloseTo(20.8);
});
});

describe('divide method checker', () => {
  test('4 divide 8 to be 0.5', () => {
    //Arrange
    const a = 4;
    const b = 8;
    calculator = new examples.Calculator(a, b);
    
    //Act
    const subtract = calculator.divide();
  
    //Assert`
    expect(subtract).toBeCloseTo(0.5);
  });

  test('0 divide 8 to be 0', () => {
    //Arrange
    const a = 0;
    const b = 8;
    calculator = new examples.Calculator(a, b);
    
    //Act
    const subtract = calculator.divide();
  
    //Assert`
    expect(subtract).toEqual(0);
  });

  test('0 divide 8 to be 0', () => {
    //Arrange
    const a = 0;
    const b = 8;
    calculator = new examples.Calculator(a, b);
    
    //Act
    const subtract = calculator.divide();
  
    //Assert`
    expect(subtract).toEqual(0);
  });

  test('0 divide 0 to be NaN', () => {
    //Arrange
    const a = 0;
    const b = 0;
    calculator = new examples.Calculator(a, b);
    
    //Act
    const subtract = calculator.divide();
  
    //Assert`
    expect(subtract).toBeFalsy();
  });
  
  test('8 divide 0 to be infinity', () => {
    //Arrange
    const a = 8;
    const b = 0;
    calculator = new examples.Calculator(a, b);
    
    //Act
    const subtract = calculator.divide();
  
    //Assert
    expect(subtract).toEqual(Infinity);
  });
  });

describe('capitalize string Checker', () => {
  test('capitalize of sanja is Sanja', () => {
    //Arrange
    const string = 'sanja';
    
    //Act
    const capitalize = examples.capitalize(string);
  
    //Assert`
    expect(capitalize).toEqual('Sanja');
  });

  test('capitalize of "5 people" is "S people"', () => {
    //Arrange
    const string = '5 people';
    
    //Act
    const capitalize = examples.capitalize(string);
  
    //Assert`
    expect(capitalize).toEqual('5 people');
  });

  test('capitalize of "   sanja" is "Sanja"', () => {
    //Arrange
    const string = '   sanja';
    
    //Act
    const capitalize = examples.capitalize(string);
  
    //Assert`
    expect(capitalize).toEqual('Sanja');
  });
});


