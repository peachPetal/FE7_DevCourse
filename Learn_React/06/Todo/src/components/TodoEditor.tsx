// // 할 일 추가 기능
// import { useState } from "react";
// import Button from "./html/Button";
// import Input from "./html/Input";

// type TodoEditorProps = {
//   onAddTodo: (text: string) => void;
// };

// export default function TodoEditor({ onAddTodo }: TodoEditorProps) {
//   const [text, setText] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (text.trim().length === 0) {
//       return;
//     }
//     onAddTodo(text);
//     setText("");
//   };

//   return (
//     <form className="todo__form" onSubmit={handleSubmit}>
//       <div className="todo__editor">
//         <Input
//           type="text"
//           className="todo__input"
//           placeholder="Enter Todo List"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <Button className="todo__button" type="submit">
//           Add
//         </Button>
//       </div>
//     </form>
//   );
// }

// TodoEditor.tsx

// import { useState } from "react";
// import { TodoProvider } from "../contexts/todo/TodoProvider";
// import Button from "./html/Button";
// import Input from "./html/Input";

// export default function TodoEditor() {
//   // Context로부터 직접 함수를 가져옵니다.
//   const { handleAddTodo } = TodoProvider();
//   const [text, setText] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (text.trim().length === 0) {
//       return;
//     }
//     handleAddTodo(text);
//     setText("");
//   };

//   return (
//     <form className="todo__form" onSubmit={handleSubmit}>
//       <div className="todo__editor">
//         <Input
//           type="text"
//           className="todo__input"
//           placeholder="Enter Todo List"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <Button className="todo__button" type="submit">
//           Add
//         </Button>
//       </div>
//     </form>
//   );
// }

// src/components/TodoEditor.tsx

import { useContext, useState } from "react"; // ✨ useContext 추가
import { TodoActionContext } from "../contexts/todo/TodoContext"; // ✨ TodoActionContext import
import Button from "./html/Button";
import Input from "./html/Input";

export default function TodoEditor() {
  // ✨ useContext를 직접 사용하여 액션 함수들을 가져옵니다.
  const actions = useContext(TodoActionContext);
  if (!actions) {
    throw new Error("TodoActionContext를 찾을 수 없습니다.");
  }
  const { addTodo } = actions;

  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    addTodo(text);
    setText("");
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <div className="todo__editor">
        <Input
          type="text"
          className="todo__input"
          placeholder="Enter Todo List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="todo__button" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}