export default function User({
  userObj: { name, age },
  clickHandler,
}: UserProps) {
  // on***, onclick, ondblclick..
  // const { name, age } = props;
  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
