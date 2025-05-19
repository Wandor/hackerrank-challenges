function diagonalDifference(arr) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    primaryDiagonal += arr[i][i];               
    secondaryDiagonal += arr[i][n - 1 - i];   
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}
