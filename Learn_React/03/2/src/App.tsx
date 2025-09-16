// import styled from "styled-components"
import { css } from '@emotion/css'
import styled from "@emotion/styled"
import {button} from "./css/style.css";

const HelloWorld = styled.h1`
  color: red;
  text-decoration: underline;
  &:hover{
    color: blue;
  }
`;

const Button = styled.button`
  color: turquoise;
`
function App() {
  const color = "white";
  return (
    <>
      <HelloWorld>Hello, World</HelloWorld>
    <div
      className={css`
        background-color: hotpink;
        &:hover {
          color: ${color};
        }
      `}
    >
      This has a hotpink background.
    </div>
    <Button>버튼</Button>
    <button className={button}>바닐라</button>
    </>
  )
}

export default App
