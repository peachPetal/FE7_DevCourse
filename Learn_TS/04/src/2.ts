{
    // enum(이넘)
    // moveX -> 왼쪽과 오른쪽으로만 이동할 수 있게 함
    type MoveX = "left" | "right";
    function characterMoveX(direction: MoveX): void{
        if(direction === "left"){
            console.log("왼쪽으로 이동");
        }
        if(direction === "right"){
            console.log("오른쪽으로 이동");
        }
    }

    characterMoveX("left"); 
    characterMoveX("right");

    type Move = "left" | "right" | "up" | "down";
    function vehicleMove(direction: Move): void{
        if(direction === "left"){
            console.log("왼쪽으로 이동");
        }
        if(direction === "right"){
            console.log("오른쪽으로 이동");
        }
        if(direction === "up"){
            console.log("위쪽으로 이동");
        }
        if(direction === "down"){
            console.log("아래쪽으로 이동");
        }
    }

    vehicleMove("left"); 
    vehicleMove("right");
    vehicleMove("up"); 
    vehicleMove("down"); 
}
{
    // enum : 고정된 값들의 집합을 정의하는 데 사용되는 특수한 타입

    enum CharacterMoveX { // 방향
        LEFT,
        RIGHT,
    }

    enum RotationMoveX { // 회전
        LEFT,
        RIGHT,
    }

    function characterMoveX(direction: CharacterMoveX | RotationMoveX): void{
        if(direction === CharacterMoveX.LEFT){
            console.log("왼쪽으로 이동");
        }
        if(direction === CharacterMoveX.RIGHT){
            console.log("오른쪽으로 이동");
        }
        if(direction === RotationMoveX.LEFT){
            console.log("왼쪽으로 회전");
        }
        if(direction === RotationMoveX.RIGHT){
            console.log("오른쪽으로 회전");
        }
    }

    characterMoveX(CharacterMoveX.LEFT); 
    characterMoveX(CharacterMoveX.RIGHT);

    characterMoveX(RotationMoveX.LEFT); 
    characterMoveX(RotationMoveX.RIGHT);
}

{
    // 숫자형 enum
    enum Direction{
        UP = 200, // 200
        DOWN = 100, // 100
        LEFT = 300, // 300
        RIGHT, // 301
    }

    console.log(Direction.UP); // 200
    console.log(Direction.DOWN); // 100
    console.log(Direction.LEFT); // 300
    console.log(Direction.RIGHT); // 301
}
{
    enum StatusCode{
        OK = 200,
        BadRequest = 400,
        Unauthorized = 401,
        NotFound = 404,
    }

    function handleResponse(code: StatusCode){
        switch(code){
            case StatusCode.OK:
                return "성공";
            case StatusCode.BadRequest:
                return "실패";
            case StatusCode.Unauthorized:
                return "인증 에러";
            case StatusCode.NotFound:
                return "찾을 수 없음";            
        }
    }

    console.log(handleResponse(StatusCode.BadRequest));
}
{
    // 문자 enum(열거형)
    enum Direction{
        UP = "Up",
        DOWN = "Down",
        LEFT = "Left",
        RIGHT = "Right",
    }
    console.log(Direction.UP);
    console.log(Direction.DOWN);
    console.log(Direction.LEFT);
    console.log(Direction.RIGHT);
}
{
    // 혼합 enum(열거형)
    enum Mix{
        YES = 1,
        NO = "No",
    }
    console.log(Mix);
    enum Direction{
        UP = 200,
        DOWN, // 201 
        LEFT, // 202
        RIGHT = "Right", 
    }
    console.log(Direction.UP);
    console.log(Direction.DOWN);
    console.log(Direction.LEFT);
    console.log(Direction.RIGHT);
}
{
    // 역방향 매핑
    enum Key{
        ArrowUp,
        ArrowDown,
    }

    function onKeyPressed(code: Key){
        console.log("Pressed : " + Key[code]);
    }

    onKeyPressed(Key.ArrowDown);
    onKeyPressed(1);
}
{
    // const enum
    enum Direction {
        UP,
        DOWN, 
        LEFT,
        RIGHT,        
    }
    const enum DirectionConst {
        UP,
        DOWN, 
        LEFT,
        RIGHT,        
    }
}

{
    (function(){})(); // 즉시 실행 함수
}

{
    // 객체 interface
    // 리터럴 타입 - enum
    // 타입 별칭 - 유니온, 인터섹션
    const enum Role {
        ADMIN = "admin",
        GUEST = "guest",
    }
    interface Account {
        id: number;
        role: Role;
    }

    type AuthAcooutn = Account & {token?: string};
}