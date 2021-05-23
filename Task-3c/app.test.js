const singleWordPalindrome = require('./app');

describe('singleWordPalindrome', () => {
  it('Censor any single word within the string if it is a palindrome', () => {
    expect(singleWordPalindrome("raar does not follow laal"))
    .toEqual("r$$r does not follow l$$l");
  });
});

describe('singleWordPalindrome', () => {
  it('This will not return the correct amount of $ symbols in correlation to the amount of chars', () => {
    expect(singleWordPalindrome("Anna went to vote in the election to fulfil her civic duty"))
    .not.toEqual("a$$a went to vote in the election to fulfil her c$$$c duty");
  });
});
