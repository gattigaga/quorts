import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import QuoteListContainer from "../QuoteListContainer";

describe("QuoteListContainer", () => {
  const mockStore = configureStore();

  const setup = () => {
    const store = mockStore();
    store.dispatch = jest.fn();

    const wrapper = shallow(<QuoteListContainer store={store} />);

    return {
      wrapper,
      store
    };
  };

  it("should maps state and dispatch to props", () => {
    const { wrapper } = setup();

    expect(wrapper.props()).toMatchObject({
      items: [],
      onClickRemove: expect.any(Function)
    });
  });

  it("should maps onClickRemove to dispatch remove quote action", () => {
    const { wrapper, store } = setup();

    wrapper.props().onClickRemove(1);

    expect(store.dispatch).toBeCalledWith({
      type: "REMOVE_QUOTE",
      payload: 1
    });
  });
});
