function isPalindrome(word) {
  let arr = []
    let newWord = word.split('')
    for (i = word.length; i >= 0; i--){
        arr.push(newWord[i])
        let otherWord = arr.join('')
        //if (otherWord === word)
        //return true 
        if (otherWord === word){
          return true
    }
  }
  return false
};



/* 
  get each part of the word
  reverse the word, creating a new word
  if the new word is equal to the old word
  return true

  splitting word into letters
  iterate through array starting from the back
  push each letter into a new array
  join letters together
*/

/*
  Add written explanation of your solution here
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
