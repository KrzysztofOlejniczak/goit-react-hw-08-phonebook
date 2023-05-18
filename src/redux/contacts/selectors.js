export const selectFilter = state => state.filter;

export const selectModalOpen = state => state.modal.isOpen;

export const selectModalId = state => state.modal.id;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
