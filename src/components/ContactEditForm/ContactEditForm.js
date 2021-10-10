import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContacts } from '../../redux/contacts/contact-operations';
import { Form, Button } from 'react-bootstrap';
import { getContacts } from '../../redux/contacts/contact-selectors';

export default function ContactEditForm({ contact, closeFunction }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const onSubmitContact = e => {
    e.preventDefault();

    const { id } = contact;
    const editedContact = { id, name, number };

    const doubleContact = contacts.find(
      contact =>
        contact.id !== id && contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (doubleContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(editContacts(editedContact));
    setName('');
    setNumber('');
    closeFunction();
  };

  return (
    <Form onSubmit={onSubmitContact}>
      <Form.Group className="mb-3" controlId="floatingTextarea">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={onChangeInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="floatingTextarea">
        <Form.Label>Number</Form.Label>
        <Form.Control
          placeholder="Enter number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Change contact
      </Button>
    </Form>
  );
}
