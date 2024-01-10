function isPalindrome(word) {
  // Write your algorithm here
  let reverse = word.split("").reverse().join("");
  if (reverse === word) {
    //console.log(true);
    return true;
  } else {
    //console.log(false);
    return false;
  }
}
isPalindrome('mom')

/* 
  Add your pseudocode here
  if word is a palindrome, return true
  else return false
*/

/*
  Add written explanation of your solution here
  Declared a variable then assigned the argument to it. I used the in-built
  split, reverse and join methods. The split method splits the word, the
  word is then reversed and joined
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
