const moveHashToStart = (str) => {
    let hash = ""
    let newStr = ""
    for (const char of str) {
        if (char === "#") {
            hash += char
        } else {
            newStr += char
        }
    }

    return hash + newStr
}

console.log(moveHashToStart("Move#Hash#to#Front"))