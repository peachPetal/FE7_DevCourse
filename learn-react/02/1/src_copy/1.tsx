import React from "react";

export default function App() {
  // React.createElement 메서드를 사용하는 방법
  // <div>
  //    <h1>Hello, React</h1>
  //    <h2>Hello, P Tag</h2>
  // </div>

  return (
    <div>
      <h1 className="title">Hello, React!</h1>
      <h2>Hello, H2 Tag!</h2>
    </div>
  );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", { class: "title" }, "Hello, React!"),
    React.createElement("h2", null, "Hello, h2 tag!")
  );
}
