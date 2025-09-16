// function App() {
//   return (
//     <>
//       <h1 className="nanum-pen-script-regular">Hello World!</h1>
//       <h1 className="bagel-fat">베이글과 크림치즈의 조합은 무적</h1>
//       <h1 className="doldam">혼저옵서예</h1>
//     </>
//   )
// }

// export default App

// export default function App () {
//   return (
//     <>
//       <h1>App Component</h1>
//       <img src="./images/storm.jpg" style={{ width: '100%' }}/>
//     </>
//   );
// }

// import storm from "./assets/images/storm.jpg";

// export default function App () {
//   return (
//     <>
//       <h1>App Component</h1>
//       <img src={storm} alt="" width={'100%'}/>
//       <div
//         style={{
//           width: "100%",
//           height: "700px",
//           background: `url(${storm}) no-repeat`,
//         }}
//       ></div>
//     </>
//   );
// }

import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/main";
import Footer from "./components/Footer"
export default function App () {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};