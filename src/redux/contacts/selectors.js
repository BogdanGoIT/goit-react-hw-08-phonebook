import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;


// мемоизация
export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (contacts, filterName) => {
    console.log("fdgfdfgd")

    const normalizedFilter = filterName.toLowerCase();

    return contacts.filter(contact => 
        contact.name.toLowerCase().includes(normalizedFilter),
    );
})


// без мемо

// export const selectVisibleContacts = state => {
//     const contacts = selectContacts(state);
//     const filterName = selectFilter(state);

//     console.log("fdgfdfgd")

//     const normalizedFilter = filterName.toLowerCase();

//     return contacts.filter(contact => 
//         contact.nameValue.toLowerCase().includes(normalizedFilter),
//     );

// }