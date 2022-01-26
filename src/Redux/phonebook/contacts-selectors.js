export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getLoadingContactList = state => state.loadingContactList;
export const getLoadingAddingContact = state => state.loadingAddingContact;

export const getFilteredContacts = state => {
  const { contacts, filter } = state;
  const normFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter),
  );
};
