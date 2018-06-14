import { addQuote, removeQuote, setQuotes } from "../../actions";
import { quotes } from "../../reducers";

describe("quotes()", () => {
  it("should returns initial state", () => {
    const expected = [];
    const state = quotes(undefined, {});

    expect(state).toEqual(expected);
  });

  it("should add new quote", () => {
    const quote = {
      id: "1",
      text: "My quote"
    };

    const expected = [quote];
    const action = addQuote(quote);
    const state = quotes(undefined, action);

    expect(state).toEqual(expected);
  });

  it("should remove a quote", () => {
    const initial = [
      {
        id: "1",
        text: "My quote"
      }
    ];

    const expected = [];
    const action = removeQuote("1");
    const state = quotes(initial, action);

    expect(state).toEqual(expected);
  });

  it("should set quotes as batch", () => {
    const newQuotes = [
      {
        id: "1",
        text: "My quote"
      },
      {
        id: "2",
        text: "My quotes"
      }
    ];

    const expected = newQuotes;
    const action = setQuotes(newQuotes);
    const state = quotes(undefined, action);

    expect(state).toEqual(expected);
  });
});
