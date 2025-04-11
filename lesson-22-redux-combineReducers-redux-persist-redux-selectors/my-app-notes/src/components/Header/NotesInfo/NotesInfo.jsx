import { useSelector } from "react-redux";

import { selectNotesCount } from "../../../redux/notes/notes-selectors";

const NotesInfo = () => {
  const {count, importantCount} = useSelector(selectNotesCount);

  return <p>Всего заметок: {count}. Важных: {importantCount}.</p>;
};

export default NotesInfo;
