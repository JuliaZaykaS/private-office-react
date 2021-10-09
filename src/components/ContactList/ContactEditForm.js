import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contact-selectors';
import { editContacts } from '../../redux/contacts/contact-operations';
import { Form, Button } from 'react-bootstrap';

export const ContactEditForm = ({ onBtnClick, onEditBtnClick, contact }) => {
    const { id, name, number } = contact;
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    // const editedContact = contacts.find(contact => contact.id === id)
    const [newName, setNewName] = useState(name);
    const [newNumber, setNewNumber] = useState(number);
    // const [disabled, setDisabled] = useState('disabled');
    const [disabled, setDisabled] = useState('disabled');

    const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setNewName(value);
      case 'number':
        return setNewNumber(value);
      default:
        return;
    }
  };

  const onSubmitContact = e => {
    e.preventDefault();
    // setName('');
    // setNumber('');
      setDisabled('disabled')

    const doubleContact = contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase(),
    );

    if (doubleContact) {
      alert(`${newName} is already in contacts`);
      return;
    }

    dispatch(editContacts({ newName, newNumber }));
  };
    return (
        <>
        <form onSubmit={onSubmitContact}>
          <input type="text"
            name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    value={name}
                    disabled={disabled}
                onChange={()=>onChangeInput(id)}
          />
          <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    value={number}
                    disabled={disabled}
                    onChange={()=>onChangeInput(id)}
                // onChange={onChangeInput}
            />
          <Button variant="outline-danger" type='submit'>
            Edit approve
          </Button>
          {/* <Button variant="outline-danger" onClick={onBtnClick}>
            Delete
          </Button> */}
        </form>
        {/* <Button variant="outline-danger" onClick={onBtnClick}>
            Delete
          </Button> */}
        </>
    )
}



