import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Quote, { Button, StyledClose } from "../Quote";

describe("Quote", () => {
  const setup = propOverrides => {
    const props = {
      text: "I am React Developer",
      onClickRemove: jest.fn(),
      onClickCopy: jest.fn(),
      ...propOverrides
    };

    const wrapper = shallow(<Quote {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should calls 'onClickCopy' while Copy button was clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(Button).simulate("click");
    expect(props.onClickCopy).toBeCalled();
  });

  it("should calls 'onClickRemove' while Remove button was clicked", () => {
    const { wrapper, props } = setup();

    wrapper.find(StyledClose).simulate("click");
    expect(props.onClickRemove).toBeCalled();
  });
});
