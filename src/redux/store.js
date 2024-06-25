import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/slice';
import filtersReducer from '../redux/filters/slice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };