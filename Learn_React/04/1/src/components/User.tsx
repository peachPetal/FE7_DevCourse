export default function User ({userObj, clickHandler}: UserProps) {
    //const {name, age} = props;
  return (
    <>
      <h1>Name: {userObj.name}</h1>
      <h1>Age: {userObj.age}</h1>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}

