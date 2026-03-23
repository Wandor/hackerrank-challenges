function rotateLeft(d, arr) {
    const n = arr.length;
    d = d % n;
    return arr.slice(d).concat(arr.slice(0, d));
}