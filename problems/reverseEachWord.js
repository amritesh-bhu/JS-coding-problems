function reverseEachWord(sentence) {

    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ")
}


console.log(reverseEachWord("Hello World How are you doing man !"))