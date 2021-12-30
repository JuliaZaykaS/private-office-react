import { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contact-selectors';
import { addContacts } from '../../redux/contacts/contact-operations';
import { Form, Button } from 'react-bootstrap';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const onSubmitContact = (e) => {
    e.preventDefault();
    setName('');
    setPhone('');
    setEmail('');

    const doubleContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (doubleContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    // dispatch(addContacts({ name, number }));
    dispatch(addContacts({ name, phone, email }));
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
          value={name}
          onChange={onChangeInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="floatingTextarea">
        <Form.Label>Number</Form.Label>
        <Form.Control
          placeholder="Enter number"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={phone}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="floatingTextarea">
        <Form.Label>Email</Form.Label>
        <Form.Control
          placeholder="Enter email"
          type="email"
          name="email"
          pattern="^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$"
          title="Email должен быть реальным, содержать @"
          required
          value={email}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
}
