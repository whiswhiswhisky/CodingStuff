chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse) {
    console.log("testing runtime callback");
    if (request.message === "go"){
      document.body.style.backgroundColor = 'red';
      console.log(document.body.style.backgroundColor);
      document.body.style.color = 'red';
    }
});
