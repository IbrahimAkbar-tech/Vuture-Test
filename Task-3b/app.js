/*
  @desc this function will censor words featured in the "censored words list" that appear in the text by using Regular Expression to assist in finding
  each word within the string and replacing substring of the word with "$".

  Regular expression used:
  //The \b metacharacter is used to find a match at the beginning or end of a word.
  //g signifies global, check whole string.
  //the given pattern will signify beginning and end of words in list /\bmeow\b|\bwoof\b/g.

  @examples include input: ["meow", "woof"], "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."
  output: "I have a cat named M$$w and a dog name W$$f. I love the dog a lot. He is larger than a small horse."

  @author Ibrahim Akbar
*/

module.exports = function censorWords(list, string) {

  let replacer = "$";
  let finalString = "";
  let stringToLower = string.toLowerCase();

  const regularExpression = RegExp('\\b' + list.join`\\b|\\b` + '\\b', 'g')

  finalString = stringToLower.replace(regularExpression, function(match) {
    return match[0] + replacer.repeat((match.length / 2)) + match.charAt(match.length - 1); //return first letter of each word + replacer symbol + final char
  });

  return finalString;
}


//seems as though repeat(match.length / 2) is not able to censor the correct amount of chars i.e mountain should be m$$$$$$n
//output shows as m$$$$n instead
