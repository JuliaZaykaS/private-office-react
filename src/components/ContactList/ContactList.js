import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { ContactListItem } from './ContactListItem';
export default function ContactList({
  contacts,
  onBtnClick,
  onEditBtnClick,
  disabled,
  // disabled = true,
}) {
  return (
    <ListGroup variant="flush" className={s.contactList}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onBtnClick={() => onBtnClick(contact.id)}
          onEditBtnClick={() => onEditBtnClick(contact.id)}
          // disabled={disabled}
          // disabled={() => onEditBtnClick(contact.id)}
          contact={contact}
        ></ContactListItem>
      ))}
    </ListGroup>
  );
}
// export default function ContactList({ contacts, onBtnClick, onEditBtnClick, disabled = true}) {
//   return (
//     <ListGroup variant="flush" className={s.contactList}>
//       {contacts.map((contact) => (
//         <ContactListItem key={contact.id} id={ contact.id } name={contact.name} number={contact.number} onBtnClick={()=>onBtnClick(contact.id)} onEditBtnClick={()=>onEditBtnClick(contact.id)} disabled={disabled} contact={contact}></ContactListItem>

//       ))}
//       {/* {contacts.map(({ id, name, number }) => (
//         <ContactListItem key={id} id={ id } name={name} number={number} onBtnClick={()=>onBtnClick(id)} onEditBtnClick={()=>onEditBtnClick(id)} disabled={disabled} contact={contact}></ContactListItem>

//       ))} */}
//     </ListGroup>
//   );
// }
// export default function ContactList({ contacts, onBtnClick, onEditBtnClick}) {
// // export default function ContactList({ contacts, onBtnClick, onEditBtnClick, disabled = true}) {
//   return (
//     <ListGroup variant="flush" className={s.contactList}>
//       {contacts.map(({ id, name, number }) => (
//         // (
//         //   disabled
//         //   ?
//         //   <ListGroup.Item key={id} variant="warning" className={s.contactItem}>

//         //   <span className={s.contactInfo}>
//         //     {name}: {number}
//         //   </span>

//         //   <Button variant="outline-danger" onClick={() => onEditBtnClick(id)}>
//         //     Edit
//         //   </Button>
//         //   <Button variant="outline-danger" onClick={() => onBtnClick(id)}>
//         //     Delete
//         //   </Button>
//         // </ListGroup.Item>
//         //     :

//         <ListGroup.Item key={id} variant="warning" className={s.contactItem}>

//           <>
//           <input type="text"
//             name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                   required
//               // disabled={"disabled"}
//                   // disabled="disabled"
//             value={name}
//           />
//           <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//               value={number}
//               disabled=''
//             />
//             </>
//           <Button variant="outline-danger" onClick={() => onEditBtnClick(id)}>
//             Edit approve
//           </Button>
//           <Button variant="outline-danger" onClick={() => onBtnClick(id)}>
//             Delete
//           </Button>
//         </ListGroup.Item>
//         )
//       )}
//       {/* ))} */}
//     </ListGroup>
//   );
// }

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
