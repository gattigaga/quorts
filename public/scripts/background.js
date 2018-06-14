chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "1",
    title: "Save to Quorts",
    contexts: ["selection"]
  });

  chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({
      url: chrome.extension.getURL("index.html")
    });
  });

  chrome.contextMenus.onClicked.addListener(info => {
    alert(info.selectionText);
  });
});
