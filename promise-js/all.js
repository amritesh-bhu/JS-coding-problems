function promiseAll(promises) {
    return new Promise((resolve, reject) => {

        const results = []
        let completed = 0

        if (promises.length == 0) resolve(results)

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then((value) => {
                    results[index] = value
                    completed++

                    if (completed === promises.length) {
                        return resolve(results)
                    }
                }).catch(reject)
        });
    })
}

promiseAll([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30),
])
.then(console.log);