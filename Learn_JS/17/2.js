// 테스크 큐, 마이크로 테스크 큐
console.log("start");
setTimeout(() => {
    console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
    console.log("promise");
});
console.log("end");