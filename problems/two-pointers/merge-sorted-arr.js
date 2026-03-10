var merge = function (nums1, m, nums2, n) {
    if (n == 0) return nums1
    if (n == 1 && m == 0) {
        nums1[0] = nums2[0]
        return nums1
    }

    // if (m == 1 && n == 1 ){

    // }

    let i = 0
    let j = 0
    while (i < (m + n) && j < n) {
        if (nums1[i] !== 0 && nums1[i] <= nums2[j]) {
            i++
        } else {
            if (nums1[i] == 0) {
                console.log("singleswap ", nums1)
                nums1[i] = nums2[j]
            } else {
                nums1[i + 1] = nums1[i]
                nums1[i] = nums2[j]
                console.log("double swap ", nums1)
            }
            i++
            j++
        }
    }
    return nums1
};

console.log(merge([2, 0], 1, [1], 1))