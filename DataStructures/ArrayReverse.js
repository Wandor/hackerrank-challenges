// 1. Using built-in reverse() method (Mutating original array)
const arr1 = [1, 2, 3, 4, 5];
const reversed1 = arr1.reverse();
console.log('1. Mutating reverse():', reversed1);

// 2. Using built-in reverse() with spread operator (Non-mutating)
const arr2 = [1, 2, 3, 4, 5];
const reversed2 = [...arr2].reverse();
console.log('2. Non-mutating spread + reverse():', reversed2);

// 3. Using a for loop (Iterative approach)
const arr3 = [1, 2, 3, 4, 5];
const reversed3 = [];
for (let i = arr3.length - 1; i >= 0; i--) {
    reversed3.push(arr3[i]);
}
console.log('3. For loop:', reversed3);

// 4. Using Two-pointer approach (In-place swap)
function reverseInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
const arr4 = [1, 2, 3, 4, 5];
console.log('4. Two-pointer (In-place):', reverseInPlace(arr4));

// 5. Using reduce() method
const arr5 = [1, 2, 3, 4, 5];
const reversed5 = arr5.reduce((acc, item) => [item, ...acc], []);
console.log('5. reduce():', reversed5);

// 6. Using map() method
const arr6 = [1, 2, 3, 4, 5];
const reversed6 = arr6.map((_, index, original) => original[original.length - 1 - index]);
console.log('6. map():', reversed6);

// 7. Using Recursion
function reverseRecursive(arr) {
    if (arr.length <= 1) return arr;
    return [arr[arr.length - 1], ...reverseRecursive(arr.slice(0, arr.length - 1))];
}
const arr7 = [1, 2, 3, 4, 5];
console.log('7. Recursion:', reverseRecursive(arr7));