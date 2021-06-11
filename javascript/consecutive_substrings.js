function consecutiveSubstrings(string) {
  const collector = []
  const start = 0
  let end = 1
  let newString = string
  while (end <= newString.length) {
    collector.push(newString.slice(start, end))
    if (end === newString.length) {
      // newString = newString.substring(1)
      newString = newString.slice(1)
      end = 0
    }
    end++ 
  }
  return collector
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
