const countWords = require('./app');

describe('countWords', () => {
  let object = {
    "cat":1,
    "dog":2,
    "larger":1,
  }

  answer = JSON.stringify(object)

  let total = 4;

  it('return the number of occurrences of words: cat, dog, larger and the total of these values', () => {
    expect(countWords(["dog", "cat", "larger"], "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."))
    .toEqual(answer + " total: " + total);
  });
});


describe('countWords', () => {
  let object2 = {
    "cat":2,
    "dog":3,
    "larger":1,
  }

  answer2 = JSON.stringify(object2)

  let total2 = 6;

  it('return the number of occurrences of words: cat, dog, larger and the total of these values as is', () => {
    expect(countWords(["dog", "cat", "larger"], "I have a cat cat named Meow and a dog dog name Woof. I love the dog a lot. He is larger than a small horse."))
    .toEqual(answer2 + " total: " + total2);
  });
});

describe('countWords', () => {
  let object3 = {
    "cat":1,
    "dog":1,
    "larger":1,
  }

  answer3 = JSON.stringify(object3)

  let total3 = 3;

  it('return the number of occurrences of words: cat, dog, larger and the total of these values as is', () => {
    expect(countWords(["dog", "cat", "larger"], "I have a cat cat named Meow and a dog dog name Woof. I love the dog a lot. He is larger than a small horse."))
    .not.toEqual(answer3 + " total: " + total3);
  });
});
