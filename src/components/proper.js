import Image from './sources/img';
import Time from './sources/time';
import Todos from './sources/todos';

const Proper = ({
  name,
  getTodos,
  addTodo,
  getNewTodo,
  checkTodo,
  value,
  deleteTodo,
}) => {
  return (
    <div className="header-section">
      <p className="welcome-text">
        Hey {name}!! Welcome, what are YOUR plans for today
      </p>
      <Image />
      <Time />
      <div className="todo">
        <Todos
          todos={getTodos}
          value={value}
          getNewTodo={getNewTodo}
          addTodo={addTodo}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default Proper;
