const smallestDigit = (n) => {

    if (Math.floor(n / 10) == 0) {
        return n
    }

    let smallestDigit = Infinity

    while (n) {
        let temp = n % 10
        if (temp < smallestDigit) {
            smallestDigit = temp
        }

        n = Math.floor(n / 10)
    }

    return smallestDigit
}

console.log(smallestDigit(123456))