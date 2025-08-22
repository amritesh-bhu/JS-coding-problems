const longestSubsequence = (arr) => {
    let largestNum = -Infinity
    const longestArray = arr.filter((item) => {
        if (item > largestNum) {
            largestNum = item
            return true
        } else {
            return false
        }
    })

    return longestArray.length

}

console.log(longestSubsequence([11, 12, 13, 14, 5, 6, 7, 8, 9]))