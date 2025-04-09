import { useSelector } from "react-redux";

import NoteList from "../MyNotes/NoteList/NoteList";

const ImportantNotes = () => {
  const importantNotes = useSelector((store) =>
    store.notes.filter((item) => item.important)
  );

  return <NoteList items={importantNotes} />;
};

export default ImportantNotes;
