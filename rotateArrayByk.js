const rotateArray = (arr, k, direction) => {

    console.log(arr.slice(-k))
    if (direction === "right") {
        return arr.slice(-k).concat(arr.slice(0, arr.length - k))
    } else {
        return arr.slice(k).concat(0, k)
    }
}


console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2, "right"))