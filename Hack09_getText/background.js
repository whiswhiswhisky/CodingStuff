console.log("background is here!")
//Create a new window at the beginning
let tabId;
chrome.windows.create({url:chrome.extension.getURL("notebook.html"),left:900,width:40,height:500},function(win){
  console.log("opened win",win);
  tabId = win.tabs[0].id;
  console.log(tabId);
});

//get selected text from content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //send back receiva msg
    // sendResponse({feedback: "received"});

    //Get the text content from content.js
    let thisText = request.selectedFromContent.toString();
    console.log(thisText);

    //if some text is selected, send the text to popup window
    chrome.tabs.sendMessage(tabId,{newText:thisText});
  });
