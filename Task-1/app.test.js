const checkString = require('./app');

describe('checkString', () => {
  it('should check the string and return correct value', () => {
    expect(checkString("e", "eeeee thats it!")).toEqual(5);
  });
});

describe('checkString', () => {
  it('should check the string and return correct value', () => {
    expect(checkString("f", "if only if only!")).toEqual(2);
  });
});

describe('checkString', () => {
  it('should check the string and return correct value', () => {
    expect(checkString("g", "if only if only!")).toEqual(0);
  });
});

describe('checkString', () => {
  it('should check the string and return correct value', () => {
    expect(checkString("m", "if only if only!")).toEqual(0);
  });
});

describe('checkString', () => {
  it('should check the string and return correct value even if no input is given', () => {
    expect(checkString("", "random text")).toEqual(0);
  });
});

describe('checkString', () => {
  it('should check the string and return 2 as last char is á', () => {
    expect(checkString("a", "raandom textA")).not.toEqual(3);
  });
});

describe('checkString', () => {
  it('should check the string and return 2 as last char is á', () => {
    expect(checkString("a", "raandom textá")).not.toEqual(3);
  });
});
