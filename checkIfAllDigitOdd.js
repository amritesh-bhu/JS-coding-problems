const checkIfAllDigitOdd = (n) => {

    while (n) {

        const quot = n % 10
        if (quot % 2 == 0) {
            return false
        }

        n = Math.floor(n / 10)
    }

    return true

}

console.log(checkIfAllDigitOdd(1))