/*
  @desc this function will censor a single word palindrome in a text by using arrays, array.reverse(each element) method and map to compare two arrays and check
  if any words match. Any matching words will have their letters between first and last chars replaced with "$".

  @examples include input: "Anna went to vote in the election to fulfil her civic duty".
  output: "a$$a went to vote in the election to fulfil her c$$$c duty".

  @author Ibrahim Akbar
*/

module.exports = function singleWordPalindrome(string) {

  const replacer = "$$$$";
  const stringToLower = string.toLowerCase();
  const arrayString = stringToLower.split(" ");

  //populate new array with results of callback func on every elements
  //join the reversed letters to form words
  //join once more to turn the whole array into string
  const reversedString = arrayString.map(item => item.split("").reverse().join("")).join(" ");

  const reversedArray = reversedString.split(" ");

  for (let i = 0; i < reversedArray.length; i++) {
    if (reversedArray[i] === arrayString[i]) {
      arrayString[i] = arrayString[i].replace(arrayString[i].substring(1, arrayString[i].length - 1), replacer) //take current element and replace chars between 1 and itself up until .length - 1 with $$$$
    }
  }

  let censoredString = arrayString.join(" ");

  return censoredString;
}


//An issue with this implementation would be that it does not censor the word properly
//eg pooop should be p$$$p, but results show p$$p
//same applies for any word longer than 4 chars
