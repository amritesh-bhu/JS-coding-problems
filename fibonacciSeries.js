const fibonacciseries = (n) => {

    if (n <= 1) {
        return n
    }

    return fibonacciseries(n - 1) + fibonacciseries(n - 2)
}

const n = 5
const arr = []
for (let i = 0; i < n; i++) {
    arr.push(fibonacciseries(i))
}

console.log(arr)