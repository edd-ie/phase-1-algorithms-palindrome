//TODO: Write a function isPalindrome that will receive one argument, a string. 
//todo: Your function should return true if the string is a palindrome 
//todo: return false if it is not a palindrome.

function isPalindrome(word) {
  // Write your algorithm here
  let str = []
  for (let i of word){
    str.push(i)
  }
  
  for (let i = 0; i < str.length; i++){
    let first = str[i]
    let second = str[str.length - (1+i)];
    if (first == second){
      console.log(first, second)
      continue
    }
    else{return false}
  }

  return true
  
}


/* 
  Add your pseudocode here
  function isPalindrome(word):
    create an empty array called str
    for each character i in word:
      push i to the end of the str array
    
    for i from 0 to length of str divided by 2:
      set first = str[i]
      set second = str[length of str - (1 + i)]
      if first is not equal to second:
        return false
  
    return true
  
*/

/*
  Add written explanation of your solution here
  - Function splits the string to individual letters and stores them in an array
  - Loop through the array taking the first element as the last element
  - it compares both and if they are not equal, returns a false
  - Else, returns true if all checks works
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
