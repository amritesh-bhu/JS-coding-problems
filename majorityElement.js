function log(...args) {
    console.log(...args)
}

function majorityElement(arr) {

    const n = arr.length
    const obj = {}

    for (let item of arr) {

        if (item.toString() in obj) {
            obj[item] += 1
        } else {
            obj[item] = 1
        }
    }

    for (const key in obj) {
        if (obj[key] > n / 2) {
            return key
        }
    }

    return -1
}

console.log(majorityElement([1, 1, 2, 1, 3, 5, 1]))