function aVeryBigSum(ar) {
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  return ar.reduce((sum, num) => sum + num, 0);
}
