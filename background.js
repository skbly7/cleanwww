function isFishy(url) {
  if(url.indexOf("://xn--") != -1 || url.indexOf("://www.xn--") != -1) {
    return true;
  }
  return false;
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details){
  	if (isFishy(details.url)){
	  	return {
	  		redirectUrl: chrome.extension.getURL("error.html") 
	  	}
 	}
 	return {};
  },
  {
    urls: ["<all_urls>"]
  },
  ["blocking"]
);
