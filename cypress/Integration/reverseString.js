// without reverse function

function reverseString(str) {
  let reversedStr = "";

  // Iterate through the string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

// Example usage
const originalString = "Hello, World!";
console.log(originalString);
const reversed = reverseString(originalString);
console.log(reversed); // Output: "!dlroW ,olleH"

//with reverse function

function reverseString1(str) {
  // Split the string into an array of characters
  let charArray = str.split("");

  // Reverse the array
  charArray.reverse();

  // Join the array back into a string
  //charArray.sort();
  //return charArray.sort().join("");
  return charArray.join("");
}

// Example usage
const originalString1 = "Hello, World!";
const reversed1 = reverseString1(originalString1);
console.log(reversed1); // Output: "!dlroW ,olleH"
