import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

// Код решти редюсерів

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

// Удалить контакт

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      
      const index = state.items.findIndex(item => item.id === action.meta.arg);
      state.items.splice(index, 1);

      // state.items = state.items.filter(item => item.id !== action.payload)
    },

  },
});

export const contactsReducer = contactsSlice.reducer;


// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState,
//     reducers: {
//         addItems(state, action) {
//             return {
//                 ...state,
//                 items: [...state.items, action.payload],
//             }
//         },
//         deleteItems(state, action) {
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.id !== action.payload),
//             }
//         },
//         addFilter(state, action) {
//             state.filter = action.payload;
//         }
//     },
// })

// export const { addItems, deleteItems, addFilter } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;