import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
export default function ContactList({ contacts, onBtnClick, onEditBtnClick }) {
  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onBtnClick={() => onBtnClick(contact.id)}
          onEditBtnClick={() => onEditBtnClick(contact.id)}
          contact={contact}
        ></ContactListItem>
      ))}
    </ListGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.object,
  ),
};
