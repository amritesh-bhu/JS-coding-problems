var findDisappearedNumbers = function(nums) {
    const missing_num = []
    for (let i = 1; i<= nums.length; i++){
        if(!nums.includes(i)){
            missing_num.push(i)
        }
    }
    return missing_num
};