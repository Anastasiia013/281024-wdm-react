import { useSelector } from "react-redux";

import { selectImportantNotes } from "../../redux/notes/notes-selectors";

import NoteList from "../MyNotes/NoteList/NoteList";

const ImportantNotes = () => {
  const importantNotes = useSelector(selectImportantNotes);

  return <NoteList items={importantNotes} />;
};

export default ImportantNotes;
