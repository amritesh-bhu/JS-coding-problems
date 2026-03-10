const sizeReduce = (str) => {
    const newObj = {}
    for (const char of str) {
        if (Object.keys(newObj).includes(char)) {
            newObj[char] += 1
        } else {
            newObj[char] = 1
        }
    }

    console.log("newObj", newObj)
    let newStr = ""
    for (const key in newObj) {
        if (newObj[key] === 1) {
            newStr += key
        } else {
            newStr += key + newObj[key]
        }
    }

    return newStr
}


console.log(sizeReduce("aabbbbeeeeffggg"))
console.log(sizeReduce("abbbcccccffffff"))