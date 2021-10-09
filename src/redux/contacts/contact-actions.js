import { createAction } from '@reduxjs/toolkit';

const filterContacts = createAction('contactList/filter', contact => ({
  payload: contact,
}));

// const disabledForm = createAction('contactList/disabled', contact => ({
//   payload: contact.id,
// }))
const disabledForm = createAction('contactList/disabled', disabled => ({
  payload: disabled,
}))

// export { filterContacts };
export { filterContacts, disabledForm };
