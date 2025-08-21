const secondLargest = (arr) => {
    let first = -Infinity
    let second = -Infinity

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > first) {
            second = first
            first = arr[i]
        } else if (first > arr[i] && second < arr[i]) {
            second = arr[i]
        }
    }

    arr.splice(arr.indexOf(first), 1)

    return arr
}

console.log(secondLargest([4, 8, 9, 2, 10, 5]))