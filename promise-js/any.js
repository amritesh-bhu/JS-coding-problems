function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        const rejects = []
        let completed = 0

        if (promises.length == 0) {
            reject(new AggregateError([], "do not have any promise to resolve and reject"))
        }

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then(resolve)
                .catch(err => {
                    rejects[index] = err
                }).finally(() => {
                    completed++
                    if (completed === promises.length) {
                        reject(new AggregateError(rejects, "All promises were rejected"))
                    }
                })
        });
    })
}

promiseAny([
  Promise.reject("A failed"),
  Promise.reject("B failed"),
  Promise.resolve("C succeeded")
])
.then(console.log); // "C succeeded"

promiseAny([
  Promise.reject("A failed"),
  Promise.reject("B failed")
])
.catch(err => console.log(err.errors));