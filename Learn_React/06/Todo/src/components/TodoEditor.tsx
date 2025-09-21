// 할 일 추가 기능
import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

type TodoEditorProps = {
  onAddTodo: (text: string) => void;
};

export default function TodoEditor({ onAddTodo }: TodoEditorProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAddTodo(text);
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