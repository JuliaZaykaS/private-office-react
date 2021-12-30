import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export const ContactListItem = ({ contact, onBtnClick, onEditBtnClick }) => {
  const { name, phone, email } = contact;
  return (
    <ListGroup.Item variant="warning" className={s.contactItem}>
      <span className={s.contactInfo}>
        {name}: {phone} : {email}
      </span>
      <div>
        <Button
          variant="outline-danger"
          onClick={onEditBtnClick}
          className={s.contactBtn}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          onClick={onBtnClick}
          className={s.contactBtn}
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
