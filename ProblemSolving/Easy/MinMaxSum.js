function miniMaxSum(arr) {
  // Sort the array
  arr.sort((a, b) => a - b);

  // Sum of first 4 (smallest) numbers for minimum sum
  let minSum = 0;
  for (let i = 0; i < 4; i++) {
    minSum += arr[i];
  }

  // Sum of last 4 (largest) numbers for maximum sum
  let maxSum = 0;
  for (let i = 1; i < 5; i++) {
    maxSum += arr[i];
  }

  console.log(minSum, maxSum);
}

/*
Time Complexity: O(n log n) due to sorting (n=5 here, so effectively constant)
Space Complexity: O(1) - sorting in place and using only constant extra space
*/


function miniMaxSum(arr) {
  let totalSum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  let minSum = totalSum - max;
  let maxSum = totalSum - min;

  console.log(minSum, maxSum);
}

/*
Time Complexity: O(n) - single pass through the array (n=5)
Space Complexity: O(1) - only variables to store sum, min, max
*/


function miniMaxSum(arr) {
  const totalSum = arr.reduce((a, b) => a + b, 0);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  console.log(totalSum - max, totalSum - min);
}

/*
Time Complexity: O(n) for reduce + O(n) for Math.min and Math.max, overall O(n)
Space Complexity: O(n) due to spread operator copying array in Math.min/max, but for small fixed size arrays this is negligible
*/
