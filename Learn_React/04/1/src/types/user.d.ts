type User = {
    name: string;
    age: number;
}

type UserProps = {
    userObj: {name: string, age: number};
    clickHandler: () => void;
}

// export 할 경우 자동 인식 되지 않고 import해야함