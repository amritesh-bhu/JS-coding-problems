var isPalindrome = function (s) {
    if (s.trim(" ") == "") return true

    let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log("str : ", str)
    let i = 0
    let j = str.length - 1
    while (i < j) {
        if (str[i] == str[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))