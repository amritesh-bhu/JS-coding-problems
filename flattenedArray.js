const flattenedArray = (arr) => {

    let flattened = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(flattenedArray(arr[i]))
            console.log(flattened)
        } else {
            flattened.push(arr[i])
            console.log(flattened)
        }
    }
    return flattened
}

console.log(flattenedArray([1, 2, 3, 4, 5, [6, [7, 8, 9]]]))