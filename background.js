function isFishy(url) {
  if(url.indexOf("://xn--") != -1 || url.indexOf("://www.xn--") != -1) {
    return true;
  }
  return false;
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details){ return {cancel: isFishy(details.url) }},
  {
    urls: ["<all_urls>"]
  },
  ["blocking"]
);
