import axios from 'axios';

const baseUrl = '/personal/todos';

const getAll = async () => {
  const request = axios.get(baseUrl);
  const res = await request;
  return res.data;
};

const create = async (newTodoObject) => {
  const request = axios.post(baseUrl, newTodoObject);
  const res = await request;

  return res.data;
};

const removeTodo = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  const res = await request;
  return res;
};

const todoServices = { getAll, create, removeTodo };

export default todoServices;
