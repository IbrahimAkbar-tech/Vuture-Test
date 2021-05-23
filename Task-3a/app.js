/*
  @desc this function which counts the number of occurrences of words from a "censored words list" in a text using arrays and objects.
  Pushes all similar words from string&array of string to the array list which is then used increment values of each word if they exist more than one time.

  @examples include input: ["dog", "cat", "larger"], "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."
  output: cat: 1, dog: 2, large: 1, total: 4.

  @author Ibrahim Akbar
*/


module.exports = function countWords(list, string) {

  let counts = {};
  let arrayList = [];
  let stringConvertedToArray = string.split(" ");

  for (let i = 0; i < stringConvertedToArray.length; i++) {
    if (list.includes(stringConvertedToArray[i])) {
      arrayList.push(stringConvertedToArray[i]);
    }
  }

  //pushing values to counts object and incrementing if already exists or setting value to 1 if not
  for (let i = 0; i < arrayList.length; i++) {
    if (counts[arrayList[i]]) {
      counts[arrayList[i]] += 1;
    } else {
      counts[arrayList[i]] = 1;
    }
  }

  for (let element in counts) {
    if (counts[element] >= 1) {
      let answer = (JSON.stringify(counts) + " total: " + arrayList.length);
      return answer;
    }
  }
}
