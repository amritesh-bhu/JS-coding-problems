var isHappy = function (n) {
    if (n == 1) return true
    while (n > 10) {
        n = (Math.floor(n / 10) * Math.floor(n / 10)) + ((n % 10) * (n % 10))
        if (n % 10 === 0) {
            return true
        }
    }

    return false
};

console.log(isHappy(2))
console.log(isHappy(19))
console.log(isHappy(1))