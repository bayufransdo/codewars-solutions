/* 
Remove First and Last Character
URL Link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

It's pretty straightforward. Your goal is to create a function that removes the first and last 
characters of a string. You're given one parameter, the original string. You don't have to worry about 
strings with less than two characters.

*/

function removeChar(str) {
  // Handle empty or single-character strings gracefully
  if (str.length === 0 || str.length === 1) {
    return str; // Return the original string as there's nothing to remove
  }

  return str.slice(1, -1);
}
