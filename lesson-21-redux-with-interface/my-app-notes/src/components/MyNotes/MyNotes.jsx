import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyNotesForm from "./MyNotesForm/MyNotesForm";
import NoteList from "./NoteList/NoteList";

import {
  addNoteToStore,
  deleteNoteFromStore,
  editNoteInStore,
  toggleNoteImportantInStore,
} from "../../redux/actions";

import styles from "./MyNotes.module.css";

const MyNotes = () => {
  const notes = useSelector((store) => store.notes);
  const [defaultValues, setDefaultValues] = useState({});

  const dispatch = useDispatch();

  const onAddNote = (data) => {
    // console.log("data", data);
    const action = addNoteToStore(data);
    // console.log("action", action);
    dispatch(action);
    // dispatch(addNoteToStore(data));
  };

  const onDeleteNote = (id) => {
    dispatch(deleteNoteFromStore(id));
  };

  const onStartEditNote = id => {
    const editNote = notes.find(item => item.id === id);
    setDefaultValues(editNote);
  }

  const onEditNote = payload => {
    dispatch(editNoteInStore(payload));
    setDefaultValues({});
  }

  const onToggleNoteImportant = (id) => {
    dispatch(toggleNoteImportantInStore(id));
  };

  const isFormEdit = Boolean(Object.keys(defaultValues).length);

  return (
    <div className={styles.wrapper}>
      <div>
        <MyNotesForm submitForm={isFormEdit ? onEditNote : onAddNote} defaultValues={defaultValues} edit={isFormEdit} />
      </div>
      <div>
        <NoteList
          items={notes}
          onDeleteNote={onDeleteNote}
          onToggleNoteImportant={onToggleNoteImportant}
          edit
          onEditNote={onStartEditNote}
        />
      </div>
    </div>
  );
};

export default MyNotes;
