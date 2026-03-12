function bonAppetit(bill, k, b) {
    const sum = bill.reduce((a, c) => a + c, 0);
    const annaShare = (sum - bill[k]) / 2;

    if (annaShare === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}