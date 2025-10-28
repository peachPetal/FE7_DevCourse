// import Button from "./html/Button";
// import Input from "./html/Input";

// export default function TodoEditor() {
//   return (
//     <>
//       <form className="todo__form">
//         <div className="todo__editor">
//           <Input
//             type="text"
//             className="todo__input"
//             placeholder="Enter Todo List"
//           />
//           <Button className="todo__button" type="submit">
//             Add
//           </Button>
//         </div>
//       </form>
//     </>
//   );
// }

// src/components/TodoEditor.tsx

import { useState, FormEvent } from "react";
import { useTodoStore } from "../stores/todoStore";
import Button from "./html/Button";
import Input from "./html/Input";

export default function TodoEditor() {
  const { addTodo } = useTodoStore();
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
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

