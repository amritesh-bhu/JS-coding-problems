const primeNumInArray = (arr) => {
    return arr.filter((num) => {
        if (num <= 1) return false; // 0 and 1 are not prime
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; // divisible → not prime
        }
        return true; // prime number
    });
};

console.log(primeNumInArray([1, 2, 20, 22, 10, 30, 27, 35, 19, 85])); 