const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("kim");
        reject(new Error("실패함"));
    }, 1000);
});

promise.then(
    (value) => {
        // resolve 실행
        console.log(value);
    },
    (reason) => {
        // reject 실행
        console.error(reason);
    }
);