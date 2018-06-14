/* global chrome */
import uuid from "uuid/v4";

import { store } from "./store/store";
import { addQuote } from "./store/actions";

chrome.contextMenus.onClicked.addListener(info => {
  const { selectionText } = info;
  const maxLength = 27;
  const textPart = selectionText.substr(0, maxLength);
  const excerpt =
    selectionText.length > maxLength ? `${textPart}...` : textPart;

  const quote = {
    id: uuid(),
    text: info.selectionText
  };

  const notification = {
    type: "basic",
    title: "Successfully copied !",
    message: excerpt,
    iconUrl: "./images/icon-48.png"
  };

  store.dispatch(addQuote(quote));

  chrome.notifications.create(uuid(), notification);
});
