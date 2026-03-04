function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Calculate apples landing positions
    const applesOnHouse = apples
        .map(d => a + d) // landing positions
        .filter(pos => pos >= s && pos <= t) // only apples on house
        .length; // count

    // Calculate oranges landing positions
    const orangesOnHouse = oranges
        .map(d => b + d)
        .filter(pos => pos >= s && pos <= t)
        .length;

    console.log(applesOnHouse);
    console.log(orangesOnHouse);
}