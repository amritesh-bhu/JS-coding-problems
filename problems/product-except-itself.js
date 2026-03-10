var productExceptSelf = function (nums) {
    const arr = []
    let prod = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                prod = prod * nums[j]
            }
            if (j == nums.length - 1) {
                arr.push(prod)
                prod = 1
            }
        }
    }

    return arr
};

console.log(productExceptSelf([1, 2, 3, 4]))