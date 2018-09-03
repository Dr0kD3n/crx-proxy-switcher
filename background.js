var active = false;
var w = window;
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({'url': chrome.extension.getURL('popup.html')},function(tab) {
  // Tab opened. 
});
	// window.location.href = (chrome.extension.getURL("popup.html"));
});

// old height height=646
