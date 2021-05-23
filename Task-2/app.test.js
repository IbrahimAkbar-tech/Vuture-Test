const isPalindrome = require('./app');

describe('isPalindrome', () => {
  it('if a string is a palindrome', () => {
    expect(isPalindrome("racecar")).toEqual(true);
  });
});

describe('isPalindrome', () => {
  it('if a string is not a palindrome', () => {
    expect(isPalindrome("Not a palindrome")).toEqual(false);
  });
});

describe('isPalindrome', () => {
  it('if a string is a palindrome', () => {
    expect(isPalindrome("God saved Eva’s dog")).toEqual(true);
  });
});

describe('isPalindrome', () => {
  it('if a string is a palindrome', () => {
    expect(isPalindrome("Gosd saved Eva’s dogGs")).toEqual(false);
  });
});

describe('isPalindrome', () => {
  it('if a string is a palindrome', () => {
    expect(isPalindrome("RacecaR")).toEqual(true);
  });
});
