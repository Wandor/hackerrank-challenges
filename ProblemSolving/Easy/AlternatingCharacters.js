function alternatingCharacters(s) {
  let deletions = 0;

  for (let i = 1; i < s.length; i++) {
    // If current character is same as previous, increase deletion count
    if (s[i] === s[i - 1]) {
      deletions++;
    }
  }

  return deletions;
}
/* Time Complexity: O(n), where n is the length of the string — just a single pass.

Space Complexity: O(1), only a few variables for counting. */