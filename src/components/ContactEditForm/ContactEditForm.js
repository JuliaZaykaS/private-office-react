import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContacts } from '../../redux/contacts/contact-operations';
import { Form, Button } from 'react-bootstrap';
import { getContacts } from '../../redux/contacts/contact-selectors';

export default function ContactEditForm({ contact, closeFunction }) {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);
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

  const onSubmitContact = e => {
    e.preventDefault();

    const { _id } = contact;
    console.log(contact);
    const editedContact = { _id, name, phone, email };
    console.log('editedContact', editedContact);

    const doubleContact = contacts.find(
      contact =>
        contact._id !== _id && contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (doubleContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(editContacts(editedContact));
    setName('');
    setPhone('');
    setEmail('');
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
        Change contact
      </Button>
    </Form>
  );
}
