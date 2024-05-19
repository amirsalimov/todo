import React, { useState } from 'react';
import axios from 'axios';

const AddTodoForm: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/todos', { title });
      setTitle('');
      // Optionally, fetchTodos() to update the list after adding a new todo
    } catch (error) {
      console.error('Error adding todo: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
