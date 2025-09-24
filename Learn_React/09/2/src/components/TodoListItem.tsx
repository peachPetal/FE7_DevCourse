// import Button from "./html/Button";
// import Checkbox from "./html/Checkbox";
// import SvgClose from "./svg/SvgClose";
// import SvgPencil from "./svg/SvgPencil";

// export default function TodoListItem() {
//   return (
//     <>
//       {/* 할 일이 완료되면 .todo__item--complete 추가 */}
//       <li className={`todo__item`}>
//         <Checkbox
//           parentClassName="todo__checkbox-group"
//           type="checkbox"
//           className="todo__checkbox"
//         >
//           아침먹기
//         </Checkbox>
//         {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
//         {/* <input type="text" className="todo__modify-input" />  */}
//         <div className="todo__button-group">
//           <Button className="todo__action-button">
//             <SvgPencil />
//           </Button>
//           <Button className="todo__action-button">
//             <SvgClose />
//           </Button>
//         </div>
//       </li>
//     </>
//   );
// }

import { useState, KeyboardEvent } from "react";
import { useTodoStore } from "../stores/todoStore";
import { Todo } from "../types/todo";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

interface TodoListItemProps {
  todo: Todo;
}

export default function TodoListItem({ todo }: TodoListItemProps) {
  const { toggleTodo, deleteTodo, updateTodo } = useTodoStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // 수정 완료 처리
  const handleUpdate = () => {
    if (!editText.trim()) {
      setEditText(todo.text); // 비어있으면 원본 텍스트로 복구
    } else {
      updateTodo(todo.id, editText);
    }
    setIsEditing(false);
  };

  // 수정 취소 처리
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };
  
  // 키보드 이벤트 처리 (Enter, Escape)
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdate();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <li className={`todo__item ${todo.completed ? "todo__item--complete" : ""}`}>
      {isEditing ? (
        // 수정 모드일 때: input 표시
        <input
          type="text"
          className="todo__modify-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        // 일반 모드일 때: Checkbox 표시
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </Checkbox>
      )}

      {/* 버튼 그룹은 항상 표시되지만, isEditing 상태에 따라 기능이 변경됨 */}
      <div className="todo__button-group">
        <Button
          className="todo__action-button"
          onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
        >
          {/* 수정 모드에서는 연필 아이콘이 '저장' 역할을 함 */}
          <SvgPencil />
        </Button>
        <Button
          className="todo__action-button"
          onClick={isEditing ? handleCancel : () => deleteTodo(todo.id)}
        >
          {/* 수정 모드에서는 X 아이콘이 '취소' 역할을, 일반 모드에서는 '삭제' 역할을 함 */}
          <SvgClose />
        </Button>
      </div>
    </li>
  );
}