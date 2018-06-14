export const ADD_QUOTE = "ADD_QUOTE";

/**
 * Get action to set add new quote
 *
 * @param {object} quote New quote
 */
export const addQuote = quote => ({
  type: ADD_QUOTE,
  payload: quote
});
