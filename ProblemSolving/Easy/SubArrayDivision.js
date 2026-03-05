function birthday(s, d, m) {

    let count = 0;

    for (let i = 0; i <= s.length - m; i++) {

        let group = s.slice(i, i + m);

        let sum = group.reduce((sum, n) => sum + n, 0);

        if (sum === d) {
            count++;
        }
    }

    return count;
}