import React from "react";
import { storiesOf, action } from "@storybook/react";

import QuoteList from "../QuoteList";

const items = [
  {
    id: "1",
    text: "My Quote 1",
    date: new Date()
  },
  {
    id: "2",
    text: "My Quote 2",
    date: new Date()
  },
  {
    id: "3",
    text: "My Quote 3",
    date: new Date()
  }
];

storiesOf("QuoteList", module).add("default", () => (
  <QuoteList
    items={items}
    onClickRemove={action("click remove")}
    onClickCopy={action("click copy")}
  />
));
