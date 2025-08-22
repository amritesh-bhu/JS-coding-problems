const rearrangeDigitToAsc = (n) => {

    if (n <= 9) {
        return n
    }

    const listOfNum = []
    while (n) {
        let quot = n % 10
        listOfNum.push(quot)
        n = Math.floor(n / 10)
    }
    return Number(listOfNum.sort().join(""))

}

console.log(rearrangeDigitToAsc(198456))