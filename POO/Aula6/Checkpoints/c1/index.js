function recursao(n) {
    if (n <= 10) {
        return n * 2;
    }
    else {
        return recursao(recursao(n / 3));
    }
}
console.log(recursao(27));
