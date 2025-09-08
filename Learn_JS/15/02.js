// 비동기 콜백 함수 순서를 일정하게 유지하기 위해서 콜백 함수 사용
function printTwo(callback){
    setTimeout(() => {
        console.log("2");
        callback();
    }, 1000);
}

function printThree(){
    console.log("3");
}

printOne(() => {
    printTwo(() => {
        printThree();
    });
});