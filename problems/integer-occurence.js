const integerOccurence = (arr) => {
    const occ = {}
    for (const item of arr) {
        if (occ[item] === undefined) {
            occ[item] = 1
        } else {
            occ[item] += 1
        }
    }

    for (const key in occ) {
        console.log(`${key} occure ${occ[key]} times`)
    }
}

integerOccurence([1, 2, 3, 1, 2, 3, 4, 1, 5, 5, 2, 6])