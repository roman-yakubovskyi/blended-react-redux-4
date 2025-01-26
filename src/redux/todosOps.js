import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637785ab81a568fc2518138f.mockapi.io/api';

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (newTodo, thunkAPI) => {
    try {
      const responce = await axios.post('/todos', newTodo);
      return responce.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId, thunkAPI) => {
    try {
      const responce = await axios.delete(`/todos/${todoId}`);
      return responce.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  },
);
