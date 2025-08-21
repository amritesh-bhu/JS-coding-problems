const removeDuplicates = (arr) => {
    const uniqueArr = []
    return arr.filter((item) => {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item)
            return true
        } else {
            return false
        }
    })
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 4, 6, 5]))