function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // Creating spaces string: O(n - i) time and space
    const spaces = ' '.repeat(n - i);
    // Creating hashes string: O(i) time and space
    const hashes = '#'.repeat(i);

    // Total work per iteration: O(n)
    console.log(spaces + hashes);
  }
  // Loop runs n times, total time complexity: O(n^2)
  // Space complexity per iteration: O(n) for temporary strings
}

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';

    // Append spaces: O(n - i) operations
    for (let j = 1; j <= n - i; j++) {
      line += ' ';
    }

    // Append hashes: O(i) operations
    for (let k = 1; k <= i; k++) {
      line += '#';
    }

    // Total operations per iteration: O(n)
    console.log(line);
  }
  // Loop runs n times, total time complexity: O(n^2)
  // Space complexity per iteration: O(n) for building the line string
}


function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // Create an array with (n - i) spaces: O(n - i) time and space
    const spaces = new Array(n - i).fill(' ').join('');
    // Create an array with i hashes: O(i) time and space
    const hashes = new Array(i).fill('#').join('');

    // Total work per iteration: O(n)
    console.log(spaces + hashes);
  }
  // Loop runs n times, total time complexity: O(n^2)
  // Space complexity per iteration: O(n) for temporary arrays and strings
}


function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // Create the hash string: O(i) time and space
    const hashes = '#'.repeat(i);

    // Pad the string on the left to length n with spaces: O(n) time and space
    console.log(hashes.padStart(n, ' '));
  }
  // Loop runs n times, total time complexity: O(n^2)
  // Space complexity per iteration: O(n) for temporary strings
}
