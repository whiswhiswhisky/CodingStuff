let catURL;

// chrome.webRequest.onBeforeRequest.addListener(function(details) {
//   console.log("huh??");
//     if (details.type === 'image') {
//       catURL = chrome.extension.getURL('malkovich.jpg');
//       return { redirectUrl: catURL };
//       console.log("what??");
//       console.log(catURL);
//     }
//   },
//
//   // Filters: This filter says to run this callback for all URLs. It can be changed to
//   // specify more specific URLs, or certain request types.
//   {
//     urls: ['<all_urls>']
//   },
//
//   // "Extra Info" Spec: "blocking" says that this callback might modify (block or redirect) the request,
//   // and "requestBody" makes it so that `details` object will have extra information about the requestBody (form data)
//   // in the request
//   ['blocking', 'requestBody']
// );

chrome.browserAction.onClicked.addListener(function(tab) {
  var tabId = tab.id;
  chrome.tabs.sendMessage(tabId, {"message":"go"});
  console.log("message sent");
});
