import { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contact-selectors';
import { addContacts } from '../../redux/contacts/contact-operations';
import { Form, Button } from 'react-bootstrap';

export default function ContactForm() {
// export default function ContactForm({ contact, dispatchFunc }) {
  // const { name, number } = contact;
  const [name, setName] = useState('');
  // const [formName, setFormName] = useState(contact?.name);
  const [number, setNumber] = useState('');
  // const [formNumber, setFormNumber] = useState(contact?.number);
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

  const onSubmitContact = (e) => {
    e.preventDefault();
    setName('');
    setNumber('');

    const doubleContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (doubleContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContacts({ name, number }));
    // dispatch(dispatchFunc({ formName, formNumber }));
  };

  return (
    <Form onSubmit={onSubmitContact} className={s.form}>
      <Form.Group className="mb-3" controlId="floatingTextarea">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          // value={contact?.name || formName}
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
          // value={contact?.number || formNumber}
          value={number}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
}
