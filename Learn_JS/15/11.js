function task1() {
    return new Promise((resolve) => {
        console.log("task1");
        resolve();
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("task2");
            resolve();
        }, 1000); 
    });
}

function task3() {
    return new Promise((resolve) => {
        console.log("task3");
        resolve();
    });
}

function task4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("task4");
            resolve();
        }, 1000); 
    });
}

function task5() {
    return new Promise((resolve) => {
        resolve();
    });
}

// Promise, catch()
// async, await, try-catch()

async function runTasks() {
    try{
        await task1();
        await task2();
        await task3();
        await task4();
        await task5();
    }catch(e){
        console.log(e);
    }
    console.log("All Tasks Finish");
}

runTasks();

// // 실행
// task1()
//     .then(() => task2())
//     .then(() => task3())
//     .then(() => task4())
//     .then(() => task5())
//     .finally(() => {
//         console.log("task all finish"); 
//     });