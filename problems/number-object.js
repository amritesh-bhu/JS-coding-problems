function whatNumberIsIt(n){
  //coding here
  
  if (n == Number.MAX_VALUE){
    return "Input number is \"Number.MAX_VALUE\""
  }else if (n == Number.POSITIVE_INFINITY){
    return "Input number is Number.POSITIVE_INFINITY"
  }else if (n == Number.NEGATIVE_INFINITY){
    return "Input number is Number.NEGATIVE_INFINITY"
  }else if (n == Number.MIN_VALUE){
    return "Input number is Number.MIN_VALUE"
  }else if (n == Number.NaN){
    return "Input number is Number.NaN"
  }else{
    return `Input number is ${n}`
  }
  
}


console.log(whatNumberIsIt(1/0))
console.log(whatNumberIsIt(100))    
console.log(whatNumberIsIt(1))
console.log(whatNumberIsIt(5e-324))
console.log(whatNumberIsIt(-Number))
console.log(whatNumberIsIt(NaN))
console.log(whatNumberIsIt(Infinity+1))