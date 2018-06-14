import { SET_QUOTES, setQuotes } from "../../actions";

describe("SET_QUOTES", () => {
  it("should returns expected action", () => {
    const quotes = [
      {
        id: "1",
        text: "My quote 1"
      },
      {
        id: "2",
        text: "My quote 2"
      }
    ];

    const expected = {
      type: SET_QUOTES,
      payload: quotes
    };

    const action = setQuotes(quotes);

    expect(action).toEqual(expected);
  });
});
