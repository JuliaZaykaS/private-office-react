import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contact-selectors';
import { editContacts } from '../../redux/contacts/contact-operations';
import { Form, Button } from 'react-bootstrap';
// import { disabledForm } from '../../redux/contacts/contact-actions';

// export const ContactEditForm = ({ onBtnClick, onEditBtnClick, contact }) => {
//   const { id, name, number } = contact;
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//   // const editedContact = contacts.find(contact => contact.id === id)
//   const [newName, setNewName] = useState(name);
//   const [newNumber, setNewNumber] = useState(number);
//   // const [disabled, setDisabled] = useState('disabled');
//   // const [disabled, setDisabled] = useState('disabled');

//   //   useEffect(() => {
//   // dispatch(disabledForm)

//   //   }, [disabled, dispatch])

//   const onChangeInput = e => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case 'name':
//         return setNewName(value);
//       case 'number':
//         return setNewNumber(value);
//       default:
//         return;
//     }
//   };

//   const onSubmitContact = e => {
//     e.preventDefault();
//     // setName('');
//     // setNumber('');
//     // setDisabled('disabled')

//     const doubleContact = contacts.find(
//       contact => contact.name.toLowerCase() === newName.toLowerCase(),
//     );

//     if (doubleContact) {
//       alert(`${newName} is already in contacts`);
//       return;
//     }

//     dispatch(editContacts({ newName, newNumber }));
//   };
//   return (
//     <>
//       <form onSubmit={onSubmitContact}>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           value={name}
//           // disabled={disabled}
//           onChange={() => onChangeInput(id)}
//         />
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           value={number}
//           // disabled={disabled}
//           onChange={() => onChangeInput(id)}
//           // onChange={onChangeInput}
//         />
//         <Button variant="outline-danger" type="submit">
//           Edit approve
//         </Button>
//         {/* <Button variant="outline-danger" onClick={onBtnClick}>
//             Delete
//           </Button> */}
//       </form>
//       {/* <Button variant="outline-danger" onClick={onBtnClick}>
//             Delete
//           </Button> */}
//     </>
//   );
// };
export default function ContactEditForm({contact, closeFunction}) {
// export default function ContactForm({ contact, dispatchFunc }) {
  // const { name, number } = contact;
  // console.log(contact.id);
  const [name, setName] = useState(contact.name);
  // const [formName, setFormName] = useState(contact?.name);
  const [number, setNumber] = useState(contact.number);
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
          const { id } = contact;

    // const doubleContact = contacts.find(
      //   contact => contact.name.toLowerCase() === name.toLowerCase(),
      // );

      // if (doubleContact) {
        //   alert(`${name} is already in contacts`);
        //   return;
        // }
    const editedContact = { id, name, number }

        dispatch(editContacts(editedContact));
        // dispatch(editContacts({ id, name, number }));
        setName('');
        setNumber('');
        closeFunction();
    // dispatch(dispatchFunc({ formName, formNumber }));
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
        Change contact
      </Button>
    </Form>
  );
}
