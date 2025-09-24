// // 개별 할 일 기능
// import React, { useState } from "react";
// import { Todo } from "../types/todo";
// import Button from "./html/Button";
// import Checkbox from "./html/Checkbox";
// import SvgClose from "./svg/SvgClose";
// import SvgPencil from "./svg/SvgPencil";

// type TodoListItemProps = {
//   todo: Todo;
//   onDeleteTodo: (id: number) => void;
//   onToggleTodo: (id: number) => void;
//   onEditTodo: (id: number, newText: string) => void;
// };

// const TodoListItem = React.memo(function TodoListItem({
//   todo,
//   onDeleteTodo,
//   onToggleTodo,
//   onEditTodo,
// }: TodoListItemProps) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editText, setEditText] = useState(todo.text);

//   // 수정 완료 핸들러
//   const handleSave = () => {
//     if (editText.trim().length === 0) {
//       setEditText(todo.text);
//     } else {
//       onEditTodo(todo.id, editText);
//     }
//     setIsEditing(false);
//   };

//   // 키보드 이벤트 핸들러 (Enter, Escape)
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleSave();
//     } else if (e.key === "Escape") {
//       setEditText(todo.text);
//       setIsEditing(false);
//     }
//   };

//   return (
//     // 할 일이 완료되면 .todo__item--complete 추가
//     <li className={`todo__item ${todo.completed ? "todo__item--complete" : ""}`}>
//       {isEditing ? (
//         // 할 일을 수정할 때만 노출
//         <input
//           type="text"
//           className="todo__modify-input"
//           value={editText}
//           onChange={(e) => setEditText(e.target.value)}
//           onBlur={handleSave} 
//           onKeyDown={handleKeyDown}
//           autoFocus
//         />
//       ) : (
//         <Checkbox
//           parentClassName="todo__checkbox-group"
//           type="checkbox"
//           className="todo__checkbox"
//           checked={todo.completed}
//           onChange={() => onToggleTodo(todo.id)}
//         >
//           {todo.text}
//         </Checkbox>
//       )}
//       <div className="todo__button-group">
//         <Button
//           className="todo__action-button"
//           onClick={() => setIsEditing(!isEditing)}
//         >
//           <SvgPencil />
//         </Button>
//         <Button
//           className="todo__action-button"
//           onClick={() => onDeleteTodo(todo.id)}
//         >
//           <SvgClose />
//         </Button>
//       </div>
//     </li>
//   );
// })

// export default TodoListItem;

// TodoListItem.tsx

import React, { useState } from "react";
import { useTodoContext } from "../contexts/todo/TodoContext";
import { Todo } from "../types/todo";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

type TodoListItemProps = {
  todo: Todo;
};

const TodoListItem = React.memo(function TodoListItem({
  todo,
}: TodoListItemProps) {
  // Context로부터 직접 필요한 함수들을 가져옵니다.
  const { handleDeleteTodo, handleToggleTodo, handleEditTodo } =
    useTodoContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim().length === 0) {
      setEditText(todo.text);
    } else {
      handleEditTodo(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo__item ${todo.completed ? "todo__item--complete" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          className="todo__modify-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked={todo.completed}
          onChange={() => handleToggleTodo(todo.id)}
        >
          {todo.text}
        </Checkbox>
      )}
      <div className="todo__button-group">
        <Button
          className="todo__action-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          <SvgPencil />
        </Button>
        <Button
          className="todo__action-button"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <SvgClose />
        </Button>
      </div>
    </li>
  );
});

export default TodoListItem;