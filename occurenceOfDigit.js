const occureneceOfDigit = (n) => {

    if (Math.floor(n / 10) == 0) {
        return 1
    }

    const obj = {}

    while (n) {
        const reminder = n % 10
        if (reminder.toString() in obj) {
            obj[reminder] += 1
        } else {
            obj[reminder] = 1
        }

        n = Math.floor(n / 10)
    }

    return obj
}


console.log(occureneceOfDigit(234233))