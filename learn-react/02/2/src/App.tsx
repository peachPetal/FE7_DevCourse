import styles from "./App.module.css";
import cz from "classnames";
import classNames from "classnames/bind";
export default function App() {
  const isCancel = false;
  const isItalic = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <h1
        className={`${styles.red_c} ${isCancel ? styles["line-through"] : ""}`}
      >
        App Component
      </h1>
      <h1 className={cx("red_c", { "line-through": isCancel })}>
        App Component
      </h1>
      <h1 className={`primary ${isItalic ? "italic" : ""}`}>Global</h1>
      <h1 className={cz("primary", { italic: isItalic })}>Global</h1>
    </>
  );
}
