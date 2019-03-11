chrome.runtime.onMessage.addListener(function(request,sender,sendResponse) {
  console.log("message received!")
  var text = '';
  for (var i = 0; i < 25; i++) {
    text = text + ' ' + 'Malkovich';
  }

  let link = chrome.extension.getURL('malkovich.jpg');
  $('p').text(text);
  $('img').attr('src', link);
});
