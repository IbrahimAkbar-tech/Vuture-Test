const countWords = require('./app');

describe('countWords', () => {
  it('censor words "meow" and "woof"', () => {
    expect(countWords(["meow", "woof"], "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."))
    .toEqual("i have a cat named m$$w and a dog name w$$f. i love the dog a lot. he is larger than a small horse.");
  });
});

describe('countWords', () => {
  it('censor words "car" and "tar"', () => {
    expect(countWords(["car", "tar"], "Do you like car tar? perhaps not tar"))
    .toEqual("do you like c$r t$r? perhaps not t$r");
  });
});

describe('countWords', () => {
  it('This will not return the correct amount of $ symbols in correlation to the amount of chars', () => {
    expect(countWords(["house", "mountain", "life"], "Perhaps living life in a house on the mountain would be nice"))
    .not.toEqual("perhaps living l$$e in a h$$$e on the m$$$$$$n would be nice");
  });
});
