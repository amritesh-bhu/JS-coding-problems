const nextGreaterElement = (arr) => {

    const newarr = []

    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] > arr[i+1]) {
            newarr.push(-1)
        } else {
            newarr.push(arr[i+1])
        }
    }

    return [...newarr,-1]
}

console.log(nextGreaterElement([6, 8, 0, 1, 3]))