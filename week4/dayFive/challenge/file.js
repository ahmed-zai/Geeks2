// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
  // Remove all whitespace and convert to lowercase
  const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

  // Sort characters of each string
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare sorted strings
  return sortedStr1 === sortedStr2;
}

// Example tests
console.log(isAnagram("Astronomer", "Moon starer"));       // true
console.log(isAnagram("School master", "The classroom"));  // true
console.log(isAnagram("Hello", "World"));                  // false
