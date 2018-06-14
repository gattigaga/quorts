/* global chrome */
import uuid from "uuid/v4";

import { store } from "./store/store";
import { addQuote } from "./store/actions";

chrome.contextMenus.onClicked.addListener(info => {
  const quote = {
    id: uuid(),
    text: info.selectionText
  };

  store.dispatch(addQuote(quote));
});
