def consecutive_substrings(string)
  # type your code in here
  collector = []
  start = 0
  num_of_chars = 1
  while (num_of_chars <= string.length) do
    collector << string[start, num_of_chars]
    if num_of_chars == string.length 
      string.slice!(0)
      num_of_chars = 0
    end
    num_of_chars += 1
  end
  collector
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']"
  print "=> " 
  print consecutive_substrings('abc')

  puts

  puts "Expecting: ['a']"
  print "=> " 
  print consecutive_substrings('a')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
