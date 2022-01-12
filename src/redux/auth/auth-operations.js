import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenForFetch } from '../../services/contacts-api';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      // tokenForFetch.set(data.token);
      // console.log(data);
      return data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  },
);
const verify = createAsyncThunk(
  'auth/verify',
  async (credentials, thunkAPI) => {
  // async ({email}, thunkAPI) => {
    console.log('credentials',credentials);
    // const email = credentials
    try {
      // const { data } = await axios.post('/users/verify', credentials);
      // const { data } = await axios.post('/users/verify', email);
    // await axios.post('/users/verify', email );
    await axios.post('/users/verify',  credentials);
    // await axios.post('/users/verify', email);
      // tokenForFetch.set(data.token);
      // return data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  },
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    tokenForFetch.set(data.token);
    return data;
  } catch (error) {
    // console.log('error', error);
    // console.log('error body', error.response.data.message);
    // return thunkAPI.rejectWithValue(error.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    tokenForFetch.unset();
  } catch (error) {
    // return thunkAPI.rejectWithValue(error.message);
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  tokenForFetch.set(persistToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    // return thunkAPI.rejectWithValue(error.message);
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
});


export { register, logIn, logOut, getCurrentUser, verify };
// export { register, logIn, logOut, getCurrentUser};
