function getTotalX(a, b) {
    // Helper function: GCD using Euclidean algorithm
    const gcd = (x, y) => {
        while (y !== 0) {
            [x, y] = [y, x % y];
        }
        return x;
    };

    // Helper function: LCM
    const lcm = (x, y) => (x * y) / gcd(x, y);

    // Step 1: LCM of array a
    const lcmA = a.reduce((acc, val) => lcm(acc, val));

    // Step 2: GCD of array b
    const gcdB = b.reduce((acc, val) => gcd(acc, val));

    // Step 3: Count multiples of lcmA that divide gcdB
    let count = 0;
    for (let multiple = lcmA; multiple <= gcdB; multiple += lcmA) {
        if (gcdB % multiple === 0) {
            count++;
        }
    }

    return count;

}