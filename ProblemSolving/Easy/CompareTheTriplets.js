function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  // Time: O(1) – we only loop through 3 elements
  // Space: O(1) – constant space used for scores

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore += 1;
    } else if (a[i] < b[i]) {
      bobScore += 1;
    }
    // if equal, no points awarded
  }

  return [aliceScore, bobScore];
}
