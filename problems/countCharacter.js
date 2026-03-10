function countCharacter(str) {
    let vowels = 0, consonants = 0, digit = 0, special = 0
    const vowelSet = "aeiou"

    for (let ch of str) {
        if (vowelSet.includes(ch)) {
            vowels++
        } else if (ch > 'a' && ch < "z") {
            consonants++
        } else if (ch > "0" && ch < "9") {
            digit++
        } else {
            special++
        }
    }

    return { vowels, consonants, digit, special }
}

console.log(countCharacter("helllow_$*%234"))