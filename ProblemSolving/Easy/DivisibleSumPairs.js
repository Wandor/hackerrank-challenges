/*Loop through the array

Compare each element with the elements after it

Check if the sum is divisible by k

Count it*/

function divisibleSumPairs(n, k, ar) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }

    return count;
}