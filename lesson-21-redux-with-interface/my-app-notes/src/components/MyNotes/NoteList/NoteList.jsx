import NoteListItem from "./NoteListItem/NoteListItem";

import styles from "./NoteList.module.css";

const NoteList = ({
  edit,
  items = [],
  onDeleteNote,
  onEditNote,
  onToggleNoteImportant,
}) => {
  const elements = items.map((item) => (
    <NoteListItem
      edit={edit}
      key={item.id}
      {...item}
      onDeleteNote={onDeleteNote}
      onEditNote={onEditNote}
      onToggleNoteImportant={onToggleNoteImportant}
    />
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default NoteList;
