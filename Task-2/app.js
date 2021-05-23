/*
  @desc this function decides if a string is a palindrome by pushing each character to the array and using the standard array.reverse() method
  to compare the values between the string and reversed array with the help of regular expression.

  @examples include input: "racecar" output: "true"

  @author Ibrahim Akbar
*/

module.exports = function isPalindrome(input) {

  const arrayInput = [];

  input = input.replace(/[^a-zA-Z]/g, "");            //regex to ignore special characters

  const lowerCaseInput = input.toLowerCase();

  for (let i = 0; i < lowerCaseInput.length; i++) {
    arrayInput.push(lowerCaseInput[i]);
  }

  arrayInput.reverse();

  let reversedInput = arrayInput.join("");            //turning reversed array into a string to compare

  if (reversedInput === lowerCaseInput) {
    return true;
  } else {
    return false;
  }
}
