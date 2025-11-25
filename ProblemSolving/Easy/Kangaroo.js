function kangaroo(x1, v1, x2, v2) {
    // If kangaroo 1 is behind but slower, they will never meet
    if (v1 <= v2) return "NO";

    // Check if the difference in positions is divisible by the difference in speeds
    return ((x2 - x1) % (v1 - v2) === 0) ? "YES" : "NO";
}