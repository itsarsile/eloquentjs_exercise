function min(a, b) {
    if (a < b) {
        return a;
    }
    if (a > b) {
        return b;
    }
}

console.log(min(0, 10))
// 0
console.log(min(0, -10))
// -10