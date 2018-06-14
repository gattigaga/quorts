import { getExcerpt } from "../../formatters";

describe("getExcerpt()", () => {
  it("should returns all words", () => {
    const words = "Who am I";
    const expected = words;
    const maxLength = 15;
    const excerpt = getExcerpt(words, maxLength);

    expect(excerpt).toEqual(expected);
  });

  it("should returns excerpt from long sentences", () => {
    const words = "Who am I";
    const expected = "Who...";
    const maxLength = 3;
    const excerpt = getExcerpt(words, maxLength);

    expect(excerpt).toEqual(expected);
  });
});
