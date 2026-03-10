var containsDuplicate = function (nums) {

    const dict = {}
    for (let num of nums) {
        if (!dict[num]) {
            dict[num] = 1
        } else {
            dict[num] += 1
        }
    }

    for (let key in dict) {
        if (dict[key] >= 1) {
            return true
        }
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 4]))