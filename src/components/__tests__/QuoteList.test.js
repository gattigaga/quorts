import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import QuoteList from "../QuoteList";

describe("QuoteList", () => {
  Date.now = jest.fn(() => 1529122840652);

  const setup = propOverrides => {
    const props = {
      items: [
        {
          id: "1",
          text: "My Quote 1",
          date: Date.now()
        },
        {
          id: "2",
          text: "My Quote 2",
          date: Date.now()
        },
        {
          id: "3",
          text: "My Quote 3",
          date: Date.now()
        }
      ],
      onClickRemove: jest.fn(),
      onClickCopy: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<QuoteList {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
