export const selectNotes = (store) => store.notes;

export const selectImportantNotes = (store) =>
  store.notes.filter((item) => item.important);

export const selectNotesCount = (store) => {
  const { length: count } = store.notes;
  const { length: importantCount } = store.notes.filter(
    (item) => item.important
  );

  return {
    count,
    importantCount,
  };
};
