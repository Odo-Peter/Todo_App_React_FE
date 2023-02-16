// import { useState, useEffect } from "react";

const Todos = ({
  todos,
  addTodo,
  getNewTodo,
  checkTodo,
  value,
  deleteTodo,
}) => {
  const colors = ['red', 'green', 'purple', 'orange', 'pale-blue', 'blue'];

  const randIndex = Math.floor(Math.random() * colors.length);

  return (
    <div>
      <div className="todos">
        <ul>
          {todos.map((todo) => {
            return (
              <div className="item" key={todo.id}>
                <input type="checkbox" onChange={checkTodo} />
                <li
                  onClick={deleteTodo}
                  className={colors[randIndex]}
                  // key={todo.id}
                >
                  {todo.name}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="enter-todos">
        <input value={value} onChange={getNewTodo} />
        <button type="submit" onClick={addTodo}>
          +
        </button>
      </div>
    </div>
  );
};

export default Todos;
