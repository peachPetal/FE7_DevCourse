import CheckBox from "./components/html/CheckBox";
// import Input from "./components/html/Input";

export default function App() {
  return (
    <div className="center">
      {/* <Button type="button" disabled>
        Add
      </Button>
      <Button className="bg-[#ed4848]">Cancel</Button> */}
      {/* <Input type="text" placeholder="Enter Todo List" /> */}
      <CheckBox>
        <span>
          I agree with <strong>terms</strong> and <strong>policies</strong>.
        </span>
      </CheckBox>
    </div>
  );
}
