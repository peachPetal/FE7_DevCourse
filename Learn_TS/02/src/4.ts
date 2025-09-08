{
    let x: number | string = 10;
    if(typeof x === "number") x.toFixed(20);

    function printValue(x: number | string){
        //console.log(x.toFixed(2));
    }

    printValue(10);
}

{
    // 매개변수가 콜백함수일 때
    function log(msg: string){
        console.log(msg);
    }

    function printValue(callback: (msg: string) => void): void{
        callback("hello");
    }

    printValue((msg: string) => {
        console.log(msg);
    });

    function createMultiplier(factor: number): (num: number) => number{
        return (num) => num * factor;
    }
    const multiplyByTwo = createMultiplier(2);
    console.log(multiplyByTwo(5));

    // createMultiplier 화살표 함수로 전환
    const arrowCreateMultiplier: (factor: number) => (num: number) => number = (factor) => (num) => num * factor; 

}

{
    function sum(...numArr: number[]){
        return numArr.reduce((acc, cur) => acc + cur, 0);
    }
    sum(1, 2, 3, 4, 5);
}

