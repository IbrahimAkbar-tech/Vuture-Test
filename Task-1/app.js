/*
  @desc this function counts the number of occurrences of a given letter in a string.

  examples include input: "e", "heeeho" output: "3".

  @author Ibrahim Akbar
*/

module.exports = function checkString(letter, string) {

  let occurences = 0;

  for (let i = 0; i < string.length; i++) {
    if (letter === (string[i])) {
      occurences++;
    }
  }
  return occurences;
}
