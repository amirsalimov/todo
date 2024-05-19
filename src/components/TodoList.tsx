import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos: ', error);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
