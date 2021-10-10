import { useSelector, useDispatch } from 'react-redux';
import {
  getFilteredContacts,
  getFilter,
  getError,
  getIsLoading,
  getContacts,
} from '../redux/contacts/contact-selectors';
import { useEffect, useState } from 'react';
import {
  fetchContacts,
  deleteContacts,
} from '../redux/contacts/contact-operations';
import { filterContacts } from '../redux/contacts/contact-actions';

import s from './ContactsPage.module.css';

import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import TechInfo from '../components/TechInfo/TechInfo';
import ContactEditForm from '../components/ContactEditForm/ContactEditForm';
import Modal from '../components/Modal/Modal';

export default function ContactsPage() {
  const contactsList = useSelector(getFilteredContacts);
  const filteredContacts = useSelector(getFilter);
  const errorMessage = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const [contact, setContact] = useState(null);
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
    const contact = contacts.find(contact => contact.id === id);
    setContact(contact);
    toggleModal();
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filteredContacts} onFindName={findName} />
        )}
        {errorMessage && <TechInfo message={errorMessage} />}
        {isLoading && <TechInfo message={'Loading...'} />}
        {contactsList.length !== 0 && (
          <ContactList
            contacts={contactsList}
            onBtnClick={onDeleteContact}
            onEditBtnClick={onEditContact}
          />
        )}
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactEditForm contact={contact} closeFunction={toggleModal} />
          </Modal>
        )}
      </Section>
    </>
  );
}
