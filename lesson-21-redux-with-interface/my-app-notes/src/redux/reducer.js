import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  TOGGLE_NOTE_IMPORTANT,
} from "./types";

const initialStore = {
  notes: [],
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...store, notes: [...store.notes, action.payload] };

    case DELETE_NOTE:
      return {
        ...store,
        notes: store.notes.filter((item) => item.id !== action.payload),
      };

    case EDIT_NOTE:
      const updateNotes = [...store.notes];
      const updateIndex = updateNotes.findIndex((item) => item.id === action.payload.id);
      updateNotes[updateIndex] = {...action.payload};
      return { ...store, notes: updateNotes };

    case TOGGLE_NOTE_IMPORTANT:
      const newNotes = [...store.notes];
      const index = newNotes.findIndex((item) => item.id === action.payload);

      newNotes[index] = {
        ...newNotes[index],
        important: !newNotes[index].important,
      };
      return { ...store, notes: newNotes };

    default:
      return store;
  }
};

export default reducer;
