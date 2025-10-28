// import { twMerge } from "tailwind-merge";
// import Button from "./html/Button";
// import Checkbox from "./html/Checkbox";
// import SvgClose from "./svg/SvgClose";
// import SvgPencil from "./svg/SvgPencil";
// import React, { useContext, useEffect, useState } from "react";
// import { TodoActionContext } from "../contexts/todos/todoContext";

// export default React.memo(function TodoListItem({ todo }: { todo: Todo }) {
//   console.log("TodoListItem Rendering");

//   const { updateTodo, deleteTodo, toggleTodo } = useContext(TodoActionContext)!;

//   const [isEdit, setIsEdit] = useState(false);
//   const [text, setText] = useState(todo.text);
//   useEffect(() => {
//     // ?? 수정이 되었다는 의미
//     if (!isEdit && todo.text !== text) {
//       updateTodo(todo.id, text);
//     }
//   }, [isEdit, text, todo.id, todo.text, updateTodo]);
//   return (
//     <>
//       {/* 할 일이 완료되면 li 태그에 .todo__item--complete 추가 */}
//       <li
//         className={twMerge(
//           `todo__item`,
//           todo.completed && "todo__item--complete"
//         )}
//       >
//         {!isEdit && (
//           <Checkbox
//             parentClassName="todo__checkbox-group"
//             type="checkbox"
//             className={"todo__checkbox"}
//             checked={todo.completed}
//             onChange={() => toggleTodo(todo.id)}
//           >
//             {todo.text}
//           </Checkbox>
//         )}
//         {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
//         {isEdit && (
//           <input
//             type="text"
//             className="todo__modify-input"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         )}
//         <div className="todo__button-group">
//           <Button
//             className="todo__action-button"
//             onClick={() => setIsEdit((isEdit) => !isEdit)}
//           >
//             <SvgPencil />
//           </Button>
//           <Button
//             className="todo__action-button"
//             onClick={() => deleteTodo(todo.id)}
//           >
//             <SvgClose />
//           </Button>
//         </div>
//       </li>
//     </>
//   );
// });

import { twMerge } from "tailwind-merge";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../store/slices/todoSlice";
import { AppDispatch } from "../store/store";

export default React.memo(function TodoListItem({ todo }: { todo: Todo }) {
  // console.log("TodoListItem Rendering"); // 렌더링 확인은 그대로 유지

  const dispatch = useAppDispatch<AppDispatch>();

  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  useEffect(() => {
    if (!isEdit && todo.text !== text) {
      // updateTodo 액션의 payload를 객체 형태로 전달
      dispatch(updateTodo({ id: todo.id, text }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isEdit, text, todo.id, todo.text]); // useEffect 의존성 배열을 간소화할 수 있습니다.

  const handleToggle = () => {
    dispatch(toggleTodo({id: todo.id}));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({id: todo.id}));
  };

  const handleUpdate = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  return (
    <>
      <li
        className={twMerge(
          `todo__item`,
          todo.completed && "todo__item--complete"
        )}
      >
        {!isEdit && (
          <Checkbox
            parentClassName="todo__checkbox-group"
            type="checkbox"
            className={"todo__checkbox"}
            checked={todo.completed}
            onChange={handleToggle}
          >
            {todo.text}
          </Checkbox>
        )}
        {isEdit && (
          <input
            type="text"
            className="todo__modify-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
        <div className="todo__button-group">
          <Button className="todo__action-button" onClick={handleUpdate}>
            <SvgPencil />
          </Button>
          <Button className="todo__action-button" onClick={handleDelete}>
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
});