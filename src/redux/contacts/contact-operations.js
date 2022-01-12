import { createAsyncThunk } from '@reduxjs/toolkit';
import { tokenForFetch } from '../../services/contacts-api';
import axios from 'axios';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      const contacts = await axios.get('/api/contacts');
      return contacts.data.contacts.docs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, phone, email }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      const contact = await axios.post('/api/contacts', {
        name,
        phone,
        email,
      });


      return contact.data.contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (_id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      await axios.delete(`/api/contacts/${_id}`);
      return _id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const editContacts = createAsyncThunk(
  'contacts/editContacts',
  async ({ _id, name, phone, email }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      const contacts = await axios.patch(`/api/contacts/${_id}`, {
        name,
        phone,
        email,
      });
      console.log('edit', contacts);

      return contacts.data.contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export { fetchContacts, addContacts, deleteContacts, editContacts };
