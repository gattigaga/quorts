/**
 * Get excerpt from words
 *
 * @param {string} words Words which need to be cutted
 * @param {number} maxLength Max excerpt length
 * @return {string} Words excerpt
 */
export const getExcerpt = (words, maxLength) => {
  const textPart = words.substr(0, maxLength);
  const excerpt = words.length > maxLength ? `${textPart}...` : textPart;

  return excerpt;
};
