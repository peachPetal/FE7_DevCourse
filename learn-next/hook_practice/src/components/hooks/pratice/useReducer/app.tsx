import { useReducer } from 'react';

// Counter Component
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'RESET':
      return { ...state, count: 0 };
    case 'CHANGE_STEP':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0, step: 1 });

  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="text-4xl font-bold text-blue-600">{state.count}</span>
      </div>

      <div className="flex justify-center space-x-2">
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span className="text-sm text-gray-600">Step:</span>
        <select
          value={state.step}
          onChange={(e) => dispatch({ type: 'CHANGE_STEP', payload: Number(e.target.value) })}
          className="border rounded px-2 py-1"
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}

// Theme Switcher Component
const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];

function themeSwitcherReducer(state, action) {
  switch (action.type) {
    case 'SWITCH_THEME':
      return { ...state, currentTheme: (state.currentTheme + 1) % themes.length };
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

export function ThemeSwitcher() {
  const [state, dispatch] = useReducer(themeSwitcherReducer, {
    currentTheme: 0,
    message: "Hello, World!"
  });

  const theme = themes[state.currentTheme];

  return (
    <div
      className={`${theme.bg} ${theme.text} p-4 rounded-lg transition-colors duration-200`}
    >
      <div className="space-y-4">
        <input
          type="text"
          value={state.message}
          onChange={(e) => dispatch({ type: 'UPDATE_MESSAGE', payload: e.target.value })}
          className="w-full px-3 py-2 rounded border text-gray-800 bg-white"
          placeholder="Enter your message"
        />

        <div className="text-center text-xl font-semibold">{state.message}</div>

        <button
          onClick={() => dispatch({ type: 'SWITCH_THEME' })}
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
        >
          Switch Theme ({theme.name})
        </button>
      </div>
    </div>
  );
}

// TodoList Component
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      if (!state.inputValue.trim()) return state;
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: state.inputValue, completed: false }
        ],
        inputValue: ''
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'UPDATE_INPUT':
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
}

export function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [{ id: 1, text: "아침먹기", completed: true }],
    inputValue: ''
  });

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch({ type: 'ADD_TODO' });
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={state.inputValue}
          onChange={(e) => dispatch({ type: 'UPDATE_INPUT', payload: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>

      {state.todos.length > 0 ? (
        <ul className="space-y-2">
          {state.todos.map(todo => (
            <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                  className="h-4 w-4 text-blue-600"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No todos yet. Add some!</p>
      )}
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          useReducer 예제 컴포넌트
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Counter</h2>
          <Counter />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Theme Switcher</h2>
          <ThemeSwitcher />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Todo List</h2>
          <TodoList />
        </div>
      </div>
    </div>
  );
}