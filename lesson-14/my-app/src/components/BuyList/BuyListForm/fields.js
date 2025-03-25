export const defaultValues = {
  name: "",
  count: 1,
  urgency: false,
  type: "food",
};

export const options = [
  {
    value: "food",
    text: "Еда",
  },
  {
    value: "spend",
    text: "Повседневные расходы",
  },
];

export const validation = {
  name: {
    required: "Название покупки нужно указать",
    minLength: {
      value: 2,
      message: "Как можно что-то понять из одной буквы?",
    },
    pattern: {
        value: /^[a-zA-Z0-9а-яА-ЯёЁ\s]+$/,
        message: "В названии покупки не должно быть спецсимволов"
    }
  },
};
