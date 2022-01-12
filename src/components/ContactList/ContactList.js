import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
export default function ContactList({ contacts, onBtnClick, onEditBtnClick }) {
  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ContactListItem
          key={contact._id}
          id={contact._id}
          name={contact.name}
          number={contact.phone}
          onBtnClick={() => onBtnClick(contact._id)}
          onEditBtnClick={() => onEditBtnClick(contact._id)}
          contact={contact}
        ></ContactListItem>
      ))}
    </ListGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
