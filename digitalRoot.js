const digitalRoot = (n) => {

    if (n <= 9) {
        return n
    }

    let sum = 0
    while (n) {
        let digit = n % 10
        sum += digit
        n = Math.floor(n / 10)
    }


    if (sum <= 9) {
        return sum
    }
    console.log(sum)
    return digitalRoot(sum)
}

const sum = digitalRoot(2345897)
console.log(sum)