const initialStore = {
  buyList: [
    {
      name: "Корм для котов",
      urgency: true,
      type: "food",
    },
    {
      name: "Стиральный порошок",
      urgency: false,
      type: "spend",
    },
  ],
};

const reducer = (store = initialStore) => {
  return store;
};

export default reducer;
