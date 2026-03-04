/* Using reduce */
function simpleArraySum(arr) {
  // Time: O(n) – reduce iterates through all n elements once
  // Space: O(1) – constant extra space (no new data structures created)
  return arr.reduce((sum, num) => sum + num, 0);
}


/* Using a for loop */
function simpleArraySum(arr) {
  let sum = 0;

  // Time: O(n) – loop runs n times
  // Space: O(1) – only a few variables used regardless of input size
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}


/* Using a for...of loop */
function simpleArraySum(arr) {
  let sum = 0;

  // Time: O(n) – iterates once through array
  // Space: O(1) – constant extra space
  for (const num of arr) {
    sum += num;
  }

  return sum;
}


/* Using a while loop */
function simpleArraySum(arr) {
  let sum = 0;
  let i = 0;

  // Time: O(n) – each element is processed once
  // Space: O(1) – fixed number of variables
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }

  return sum;
}


/* Using a foeEach loop */

function simpleArraySum(arr) {
  let sum = 0;

  // Time: O(n) – forEach visits every element
  // Space: O(1) – no additional memory usage per element
  arr.forEach((num) => {
    sum += num;
  });

  return sum;
}

