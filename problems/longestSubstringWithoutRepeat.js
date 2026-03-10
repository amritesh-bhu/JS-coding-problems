function longestSubstringWithoutRepeat(str) {
    let set = new Set()
    let left = 0, maxLen = 0, lngStr = ''

    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left])
            left++
        }
        set.add(str[right])
        if (right - left + 1 > maxLen) {
            maxLen = right - left + 1;
            lngStr = str.substring(left, right + 1);
        }

    }

    return { maxLen, lngStr }
}

console.log(longestSubstringWithoutRepeat("helloworld"))