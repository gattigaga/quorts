import { REMOVE_QUOTE, removeQuote } from "../../actions";

describe("REMOVE_QUOTE", () => {
  it("should returns expected action", () => {
    const quoteID = 1;

    const expected = {
      type: REMOVE_QUOTE,
      payload: quoteID
    };

    const action = removeQuote(quoteID);

    expect(action).toEqual(expected);
  });
});
