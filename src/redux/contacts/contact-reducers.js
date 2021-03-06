import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './contact-actions';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
  editContacts,
} from './contact-operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [editContacts.fulfilled]: (state, action) =>[action.payload, ...state.filter(({_id}) => _id!==action.payload._id)],

  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(contact => contact._id !== action.payload),
});

const filteredContacts = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [addContacts.rejected]: (_, action) => action.payload,
  [editContacts.rejected]: (_, action) => action.payload,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContacts.pending]: () => null,
  [deleteContacts.pending]: () => null,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [addContacts.pending]: () => true,
  [editContacts.pending]: () => true,
  [deleteContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [addContacts.fulfilled]: () => false,
  [editContacts.fulfilled]: () => false,
  [deleteContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContacts.rejected]: () => false,
  [editContacts.rejected]: () => false,
  [deleteContacts.rejected]: () => false,
});

export default combineReducers({
  contacts,
  filteredContacts,
  error,
  isLoading,
});

