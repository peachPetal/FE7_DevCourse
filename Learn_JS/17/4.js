// 모듈
// 파일 단위로 기능을 나누고 가져다 쓰기 위한 코드 묶음
function sum(a, b){
    return a + b;
}
function multiple(a, b){
    return a * b;
}

// export {sum, multiple};
export default sum; // default는 하나만

// 엄격
"use strict";
num = 10;