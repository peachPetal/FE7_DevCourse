const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("task1");
        //reject(new Error("실패함"));
    }, 1000);
});

promise.then((value) => {
    console.log(value);
    return "task2";
})
.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task3");
        }, 2000);
    });
})
.then((value) => {
    console.log(value);
    return "task4";
})
.then((value) => {
    console.log(value);
    return "task all finish";
})
.catch((reason) => {
    console.log(reason);
});