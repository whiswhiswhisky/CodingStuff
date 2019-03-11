document.body.addEventListener("mouseup", function(mycallback){
  let text = document.getSelection().toString();
	console.log(text);

	if (text.length > 0){
	chrome.runtime.sendMessage({"selectedFromContent": text});
}
});
