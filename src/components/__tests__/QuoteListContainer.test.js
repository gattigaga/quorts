import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import toJSON from "enzyme-to-json";

import ConnectedComponent, { QuoteListContainer } from "../QuoteListContainer";

describe("QuoteListContainer", () => {
  Date.now = jest.fn(() => 1529122840652);

  const mockStore = configureStore();

  const setup = (props = {}, isConnected = true) => {
    const store = mockStore();
    store.dispatch = jest.fn();

    const wrapper = isConnected
      ? shallow(<ConnectedComponent store={store} />)
      : shallow(<QuoteListContainer {...props} />);

    return {
      wrapper,
      store
    };
  };

  it("should renders with quotes", () => {
    const items = [
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
    ];
    const { wrapper } = setup({ items }, false);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should renders without quotes", () => {
    const { wrapper } = setup({}, false);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

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
