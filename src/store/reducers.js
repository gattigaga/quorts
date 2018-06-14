import { ADD_QUOTE, REMOVE_QUOTE, SET_QUOTES } from "./actions";

export const quotes = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_QUOTE:
      return [...state, payload];

    case REMOVE_QUOTE:
      return state.filter(item => item.id !== payload);

    case SET_QUOTES:
      return payload;

    default:
      return state;
  }
};
