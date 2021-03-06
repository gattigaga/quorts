export const ADD_QUOTE = "ADD_QUOTE";
export const REMOVE_QUOTE = "REMOVE_QUOTE";
export const SET_QUOTES = "SET_QUOTES";

/**
 * Get action to set add new quote
 *
 * @param {object} quote New quote
 */
export const addQuote = quote => ({
  type: ADD_QUOTE,
  payload: quote
});

/**
 * Get action to remove existing quote
 *
 * @param {number} quoteID Quote ID
 */
export const removeQuote = quoteID => ({
  type: REMOVE_QUOTE,
  payload: quoteID
});

/**
 * Get action to set quotes
 *
 * @param {array} quotes New quotes
 */
export const setQuotes = quotes => ({
  type: SET_QUOTES,
  payload: quotes
});
