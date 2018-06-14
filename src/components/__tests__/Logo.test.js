import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Logo from "../Logo";

describe("Logo", () => {
  const setup = propOverrides => {
    const props = {
      ...propOverrides
    };

    const wrapper = shallow(<Logo {...props} />);

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
