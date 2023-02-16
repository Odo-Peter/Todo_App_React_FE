import { useState, useEffect } from 'react';
import Modal from './components/modal';
import Proper from './components/proper';
import todoServices from './components/services/todoServices';

const App = () => {
  const [entryName, setEntryName] = useState('');
  const [modal, setModal] = useState(true);
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    todoServices.getAll().then((result) => setItems(result));
  }, []);

  //getting the name of the person wanting to use the todo app
  const handleNameChange = (e) => {
    setEntryName(e.target.value);
  };

  //toggling the modal to the proper app
  const handleModal = (e) => {
    e.preventDefault();
    setModal(false);

    setItems(items);
  };

  //adding new todos to the app
  const addTodo = (e) => {
    e.preventDefault();

    const todoObject = {
      name: todo,
    };

    if (todoObject.name !== '') {
      todoServices
        .create(todoObject)
        .then((todoCreated) => setItems(items.concat(todoCreated)));
    }
    setTodo('');
  };

  //checking each todo to show it has being done or not
  const checkTodo = (e) => {
    const checked = e.target.checked;
    const el = e.target.nextElementSibling;

    if (!checked) {
      el.style.textDecoration = 'none';
      el.style.opacity = '1';
    } else if (checked) {
      el.style.textDecoration = 'line-through';
      el.style.opacity = '0.5';
    }
  };

  //geting the todo being typed into the input field
  const getNewTodo = (e) => {
    setTodo(e.target.value);
  };

  //delete todo selected
  const deleteTodo = (e) => {
    //getting the todo via its text
    const toBeDeleted = e.target.textContent;

    //mapping todo to get the id from the backend
    const mappedID = items.map((item) =>
      toBeDeleted === item.name ? item.id : ''
    );
    //filtering each todo that do not attain the criteria i.e 'being the id needed'
    const filteredID = mappedID.filter((id) => id !== '');

    //assigning the final filtered value to a variable
    const id = filteredID[0];

    //confirming the deletion process from the frontend
    const confirm = window.confirm(
      `Do you want to delete this todo: "${toBeDeleted}"`
    );

    if (confirm) {
      todoServices.removeTodo(id).then(() => console.log('deleted'));

      //after successful deletion, reset the UI back to the now available todos
      const origin = items
        .map((item) => (item.name !== toBeDeleted ? item : ''))
        .filter((t) => t !== '');

      setItems(origin);
    } else {
      setItems(items);
    }
  };

  //to check if the app user didnt enter any name at the modal to begin
  if (entryName === '' && !modal) {
    window.alert('Please enter your name');
    setModal(true);
  }

  return (
    <div className="container">
      {modal ? (
        <Modal
          name={entryName}
          handleNameChange={handleNameChange}
          handleModal={handleModal}
        />
      ) : (
        <div className="proper-page">
          <Proper
            name={entryName.toUpperCase()}
            getTodos={items}
            addTodo={addTodo}
            getNewTodo={getNewTodo}
            value={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      )}
    </div>
  );
};

export default App;
