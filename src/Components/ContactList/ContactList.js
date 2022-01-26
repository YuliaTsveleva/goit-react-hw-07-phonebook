import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   getFilteredContacts,
//   getLoadingContactList,
// } from '../../Redux/phonebook/contacts-selectors';
// import * as actions from '../../Redux/phonebook/contacts-actions';
// import { operations } from '../../Redux/phonebook/contacts-operations';
import { operations, selectors } from 'Redux/phonebook';

export default function ContactList() {
  const contacts = useSelector(selectors.getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  const loading = useSelector(selectors.getLoading);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading === 'loadingContacts' && <p>Loading...</p>}
      <ul className={s.contactsList}>
        {contacts &&
          contacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              email={contact.email}
              onClick={() => onDeleteContact(contact.id)}
            />
          ))}
      </ul>
    </>
  );
}
