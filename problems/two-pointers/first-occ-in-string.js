var strStr = function (haystack, needle) {
    if (needle == "") return -1

    let i = 0
    let j = 0
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++
            j++
            if (j == needle.length) {
                return i - j
            }
        } else if (j !== 0) {
            j = 0
            i = i-1
        }else{
            i++
        }
    }

    return -1
};


console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))
console.log(strStr("hello","ll"))
console.log(strStr("hello","ll"))
console.log(strStr("mississippi","pi"))
