// import React from "react";

import { requestFormReset } from "react-dom";

// class App extends React.Component{
//   render(): React.ReactNode {
//     return <h1>Hello, World(With Class Component)</h1>;
//   }
// }

// export default App;


// 함수형 컴포넌트
// function App() {
//   return <h1>Hello, World(Function Component)</h1>;
// }
// export default App;

// export default function App() {
//   return <h1>Hello, World(Function Component)</h1>;
// }

// const App = () => {
//   return <h1>Hello, World(Function Component)</h1>;
// }
// export default App;

// import React from "react";
// export default function App () {
//   const name = "kim";
//   return (
//     <>
//       {/* 주석 */}
//       <h1 className="ddd" data-id="1212">App Component</h1>
//       <label htmlFor="email">email</label>
//       <input id="email" type="text"/>
//       <h1>999 * 999 = {999 * 999}</h1>
//       <h2 style={{color:"red"}}>name: {name}</h2>
//     </>
//   );
// }

// import React from "react";
// export default function App () {
//   // return (
//   //   <>
//   //     <h1>App Component</h1>
//   //   </>
//   // );
//   // return React.createElement("h1", null, "Hello, React!");
//   // return React.createElement(
//   //   "div",
//   //   null,
//   //   React.createElement("h1", null, "Hello, React!"),
//   //   React.createElement("h2", null, "Hello, h2 tag!")
//   // );
//   return <div>
//     <h1>Hello, React!</h1>
//     <h2>Hello, H2 Tag!</h2>
//     <h3>Hello, H3 Tag!</h3>
//   </div>
// }
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Section from "./components/Section";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
export default function App () {
  return (
    <>
    <Header />
    <Nav />
    <Article />
    <Section />
    <Aside />
    <Footer />
    </>
  );
}