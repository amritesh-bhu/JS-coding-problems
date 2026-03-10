var maxSubArray = function(nums) {
  let largest = nums[0];
  let largestSubArray = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let subArray = nums.slice(i, j + 1);
      let sum = subArray.reduce((a, b) => a + b, 0);

      if (sum > largest) {
        largest = sum;
        largestSubArray = subArray;
      }
    }
  }

  return { largest, subArray: largestSubArray };
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
