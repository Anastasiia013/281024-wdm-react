import {
    ADD_NOTE,
    DELETE_NOTE,
    EDIT_NOTE,
    TOGGLE_NOTE_IMPORTANT,
  } from "./notes-types";

  const notesReducer = (store = [], action) => {
    switch (action.type) {
      case ADD_NOTE:
        return [...store, action.payload];
  
      case DELETE_NOTE:
        return store.filter((item) => item.id !== action.payload);
  
      case EDIT_NOTE:
        const updateNotes = [...store];
        const updateIndex = updateNotes.findIndex((item) => item.id === action.payload.id);
        updateNotes[updateIndex] = {...action.payload};
        return updateNotes;
  
      case TOGGLE_NOTE_IMPORTANT:
        const newNotes = [...store];
        const index = newNotes.findIndex((item) => item.id === action.payload);
  
        newNotes[index] = {
          ...newNotes[index],
          important: !newNotes[index].important,
        };
        return newNotes;
  
      default:
        return store;
    }
  };
  
  export default notesReducer;
  