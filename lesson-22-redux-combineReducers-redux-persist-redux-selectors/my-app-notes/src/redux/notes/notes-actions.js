import { nanoid } from "nanoid";

import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, TOGGLE_NOTE_IMPORTANT } from "./notes-types";

export const addNoteToStore = payload => ({
    type: ADD_NOTE,
    payload: {
        id: nanoid(),
        ...payload,
    },
})

export const deleteNoteFromStore = payload => ({
    type: DELETE_NOTE,
    payload,
})

export const editNoteInStore = payload => ({
    type: EDIT_NOTE,
    payload,
})

export const toggleNoteImportantInStore = payload => ({
    type: TOGGLE_NOTE_IMPORTANT,
    payload,
})