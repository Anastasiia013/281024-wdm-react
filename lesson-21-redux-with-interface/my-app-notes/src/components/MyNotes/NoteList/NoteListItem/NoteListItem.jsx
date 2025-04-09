import styles from "./NoteListItem.module.css";

const NoteListItem = ({
  id,
  title,
  text,
  important,
  onDeleteNote,
  edit,
  onEditNote,
  onToggleNoteImportant,
}) => {
  return (
    <li className={styles.item}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <button type="button" onClick={() => onDeleteNote(id)}>
          Delete
        </button>
        {edit && <button type="button" onClick={()=> onEditNote(id)}>Edit</button>}
        <button type="button" onClick={() => onToggleNoteImportant(id)}>
          Mark {important ? "not important" : "important"}
        </button>
      </div>
    </li>
  );
};

export default NoteListItem;
