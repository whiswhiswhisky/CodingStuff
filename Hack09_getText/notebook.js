console.log("This is a popup page");
let pText;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  let nText = request.newText;

  if (nText != null && nText != pText){
    let newPara = $("<p></p>").text("- " + nText);
    $("body").append(newPara);
    pText = request.newText;
  }

  console.log("New text is : ",nText);
  console.log("Previous text is: ", pText);
});
