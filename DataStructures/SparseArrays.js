function matchingStrings(stringList, queries) {
    const frequency = {};

    // Step 1: Count occurrences
    for (let str of stringList) {
        frequency[str] = (frequency[str] || 0) + 1;
    }

    // Step 2: Resolve queries
    const result = [];
    for (let q of queries) {
        result.push(frequency[q] || 0);
    }

    return result;
}