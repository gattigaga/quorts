import { ADD_QUOTE, addQuote } from "../../actions";

describe("ADD_QUOTE", () => {
  it("should returns expected action", () => {
    const quote = {
      id: "1",
      text: "My quote"
    };

    const expected = {
      type: ADD_QUOTE,
      payload: quote
    };

    const action = addQuote(quote);

    expect(action).toEqual(expected);
  });
});
