// import First from "./components/First";
// import Second from "./components/Second";
// export default function App () {
//   return (
//     <>
//       <h1 style={{
//         color:"red",
//         fontSize:"40px",
//         textDecoration:"line-through",
//       }}>App Component</h1>
//       <h2 className="title">Exteral Style</h2>
//       <First />
//       <Second />
//     </>
//   );
// }

// import styles from "./App.module.css";
// import classNames from "classnames/bind";
// export default function App () {
//   const isCancel = true;
//   const cx = classNames.bind(styles);
//   return (
//     <>
//       <h1 className={`${styles.red_c} ${isCancel ? styles.line_through : ""}`}>App Component</h1>
//       <h1 className={cx("red_c", "line_through")}>App Component</h1>
//       <h1 className={cx("red_c", {line_through: isCancel})}>App Component</h1>
//     </>
//   );
// }

import styles from "./App.module.css";
import className from "classnames";
import classNames from "classnames/bind";
export default function App () {
  const isCancel = true;
  const isItalic = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <h1 className={cx("red_c", {line_through: isCancel})}>App Component</h1>
      <h1 className={className("primary", {italic: isItalic})}>Global</h1>
    </>
  );
}