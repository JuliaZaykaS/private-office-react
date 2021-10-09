import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { ContactEditForm } from './ContactEditForm';

// export const ContactListItem = ({ contact, disabled, onBtnClick, onEditBtnClick }) => {
//     const { id, name, number } = contact;
//     return (
//         // <ListGroup.Item variant="warning" className={s.contactItem} disabled={disabled}>
//         <ListGroup.Item variant="warning" className={s.contactItem}>
//             (disabled ?
//             <>
//           <span className={s.contactInfo}>
//             {name}: {number}
//           </span>
//           <Button variant="outline-danger" onClick={onEditBtnClick}>
//             Edit
//                 </Button>
//                 </>
// :
//           <ContactEditForm id={id} onBtnClick={onBtnClick} contact={ contact}/>
//             )

//           <Button variant="outline-danger" onClick={onBtnClick}>
//             Delete
//           </Button>
//         </ListGroup.Item>
//     )
// }
export const ContactListItem = ({
  contact,
  disabled,
  onBtnClick,
  onEditBtnClick,
}) => {
  const { id, name, number } = contact;
  return (
    <ListGroup.Item variant="warning" className={s.contactItem}>
          <ContactEditForm id={id} onBtnClick={onBtnClick} contact={contact} disabled={ disabled}/>
       {/* (disabled ? */}

          <Button variant="outline-danger" onClick={onEditBtnClick}>

              Edit
          </Button>
          {/* :

          <Button variant="outline-danger" onClick={onEditBtnClick}>

              Edit approve
      </Button> */}
        {/* ) */}

      <Button variant="outline-danger" onClick={onBtnClick}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};
// export const ContactListItem = ({ contact, disabled, onBtnClick, onEditBtnClick }) => {
//     const { id, name, number } = contact;
//     return (
//         (
//           disabled
//           ?
//         //   <ListGroup.Item key={id} variant="warning" className={s.contactItem}>
//           <ListGroup.Item variant="warning" className={s.contactItem}>

//           <span className={s.contactInfo}>
//             {name}: {number}
//           </span>

//           {/* <Button variant="outline-danger" onClick={() => onEditBtnClick(id)}> */}
//           <Button variant="outline-danger" onClick={onEditBtnClick}>
//             Edit
//           </Button>
//           {/* <Button variant="outline-danger" onClick={()=>onBtnClick(id)}> */}
//           <Button variant="outline-danger" onClick={onBtnClick}>
//             Delete
//           </Button>
//         </ListGroup.Item>
//             :

//         // <ListGroup.Item key={id} variant="warning" className={s.contactItem}>
//                 <ListGroup.Item variant="warning" className={s.contactItem}>
//                     <ContactEditForm id={id} onBtnClick={onBtnClick} contact={ contact}/>

//           {/* <>
//           <input type="text"
//             name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             value={name}
//           />
//           <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           value={number}
//             />
//             </>
//           {/* <Button variant="outline-danger" onClick={()=>onEditBtnClick(id)}> */}
//           <Button variant="outline-danger" onClick={onEditBtnClick}>
//             Edit approve
//           </Button>
//           {/* <Button variant="outline-danger" onClick={()=>onBtnClick(id)}> */}
//           <Button variant="outline-danger" onClick={onBtnClick}>
//             Delete
//           </Button> */}
//         </ListGroup.Item>
//         )
//     )
// }
