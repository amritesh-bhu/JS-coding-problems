function promiseAllSettle(promises) {
    return new Promise((resolve, reject) => {
        const results = []
        let completed = 0

        if (promises.length == 0) resolve(results)

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then((value) => {
                    results[index] = { status: "fullfilled", value }
                }).catch((reason) => {
                    results[index] = { status: "rejected", reason }
                }).finally(() => {
                    completed++
                    if (promises.length == completed) {
                        resolve(results)
                    }
                })
        });
    })
}

promiseAllSettle([
  Promise.resolve(10),
  Promise.reject("Failed"),
]).then(console.log);