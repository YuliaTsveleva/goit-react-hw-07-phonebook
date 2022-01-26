import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import // fetchContactsRequest,
// // fetchContactsSuccess,
// // fetchContactsError,
// // addContactRequest,
// // addContactSuccess,
// // addContactError,
// // deleteContactRequest,
// // deleteContactSuccess,
// // deleteContactError,
// './contacts-actions';

axios.defaults.baseURL = 'https://61f08b4e732d93001778eab3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number, email }, { rejectWithValue }) => {
    try {
      const contact = { name, number, email };
      const response = await axios.post('/contacts', contact);
      // console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }

//   // axios
//   //   .get('/contacts')
//   //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //   .catch(error => dispatch(fetchContactsError(error)));
// };

// export const addContact =
//   ({ name, number, email }) =>
//   dispatch => {
//     const contact = { name, number, email };

//     dispatch(addContactRequest());

//     axios
//       .post('/contacts', contact)
//       .then(({ data }) => dispatch(addContactSuccess(data)))
//       .catch(error => dispatch(addContactError(error.message)));
//   };

// export const deleteContact = id => dispatch => {
//   dispatch(deleteContactRequest);

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error.message)));
// };

// export const operations = { fetchContacts, addContact, deleteContact };
