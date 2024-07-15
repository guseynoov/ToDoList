import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded">
      <div
        className={`flex-1 ${todo.completed ? 'line-through' : ''}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={() => removeTodo(todo.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default TodoItem;
