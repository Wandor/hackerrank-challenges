function dynamicArray(n, queries) {
    // Step 1: Initialize n empty arrays
    const arr = Array.from({ length: n }, () => []);

    let lastAnswer = 0;
    const answers = [];

    for (let i = 0; i < queries.length; i++) {
        const [type, x, y] = queries[i];

        const idx = (x ^ lastAnswer) % n;

        if (type === 1) {
            // Append y
            arr[idx].push(y);
        } else if (type === 2) {
            // Retrieve value
            const size = arr[idx].length;
            lastAnswer = arr[idx][y % size];
            answers.push(lastAnswer);
        }
    }

    return answers;
}