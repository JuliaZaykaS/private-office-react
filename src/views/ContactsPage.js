import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import TechInfo from '../components/TechInfo/TechInfo';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilteredContacts,
  getFilter,
  getError,
  getIsLoading,
  getContacts,
  // getDisabled,
} from '../redux/contacts/contact-selectors';
// import {
//   getFilteredContacts,
//   getFilter,
//   getError,
//   getIsLoading,
//   getContacts,
// } from '../redux/contacts/contact-selectors';
import { useEffect, useState } from 'react';
import {
  fetchContacts,
  deleteContacts,
  editContacts,
  addContacts,
} from '../redux/contacts/contact-operations';
// import { filterContacts, disabledForm } from '../redux/contacts/contact-actions';
import { filterContacts } from '../redux/contacts/contact-actions';
import s from './ContactsPage.module.css';
import ContactEditForm  from '../components/ContactList/ContactEditForm';
import Modal from '../components/Modal/Modal';

export default function ContactsPage() {
  const contactsList = useSelector(getFilteredContacts);
  const filteredContacts = useSelector(getFilter);
  const errorMessage = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  // const [disabled, setDisabled] = useState('disabled')
  // const [disabled, setDisabled] = useState('')
  // const disabled = useSelector(getDisabled);
  // const [isOpen, setIsOpen] = useState(false)
  const [contact, setContact] = useState(null)
  // console.log(disabled);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(deleteContacts(id));

  const findName = e => {
    dispatch(filterContacts(e.target.value));
  };

  const toggleModal = e => {
    setShowModal(showModal => !showModal);
  };

    const onEditContact = id => {
      const contact = contacts.find(contact => contact.id === id)
      setContact(contact)
      toggleModal()
      // setIsOpen(true)
      // console.log(disabled);
      // setDisabled('')
      // dispatch(disabledForm(disabled))
      // const contact = contacts.find
  // setDisabled(false)
      // dispatch(editContacts(id));
    }

  return (
    <>
      <Section title={'Phonebook'}>
        {/* <ContactForm dispatchFunc={ addContacts}/> */}
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filteredContacts} onFindName={findName} />
        )}
        {errorMessage && <TechInfo message={errorMessage} />}
        {isLoading && <TechInfo message={'Loading...'} />}
        {
          contactsList.length !== 0 && (
            // (
            // {
            // <ContactList contacts={contactsList} onBtnClick={onDeleteContact} onEditBtnClick={onEditContact} disabled={disabled}/>
            // <ContactList contacts={contactsList} onBtnClick={onDeleteContact} onEditBtnClick={onEditContact} disabled={disabled} />
            // (isOpen && <ContactEditForm contact={contact} />)
            <>
              <ContactList
                contacts={contactsList}
                onBtnClick={onDeleteContact}
                // onEditBtnClick={toggleModal}
                onEditBtnClick={onEditContact}
              />
              {/* <ContactList contacts={contactsList} onBtnClick={onDeleteContact} onEditBtnClick={onEditContact} /> */}
              {/* (isOpen && <ContactEditForm contact={contact} />) */}
              {/* <ContactEditForm contact={contact} /> */}
            </>
          )
          // )
        }
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactEditForm contact={contact} closeFunction={ toggleModal}/>
            {/* <ContactForm contact={contact} dispatchFunc={ editContacts}/> */}
          </Modal>
        )}
        {/* } */}
      </Section>
    </>
  );
}
