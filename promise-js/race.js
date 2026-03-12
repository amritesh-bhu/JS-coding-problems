function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            Promise.resolve(p)
                .then(resolve)
                .catch(reject)
        });
    })
}

promiseRace([
    new Promise(res => setTimeout(() => res("slow"), 1000)),
    new Promise(res => setTimeout(() => res("fast"), 100)),
])
    .then(console.log); // "fast"
