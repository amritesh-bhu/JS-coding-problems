


function peakElement(elements) {

    let n = elements.length

    if (elements.length == 1) return elements[0]
    if (elements[0] > elements[1]) return elements[0]
    if (elements[n - 1] > elements[n - 2]) return elements[n - 1]


    let lo = 1, hi = n - 2

    while (lo <= hi) {

        let mid = lo + Math.floor((hi - lo) / 2)

        if (elements[mid] > elements[mid + 1] && elements[mid] > elements[mid - 1]) {
            return elements[mid]
        }

        if (elements[mid] < elements[mid + 1]) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
}


// Driver Code
const arr = [1, 2, 4, 5, 7, 8, 3];
console.log(peakElement(arr));