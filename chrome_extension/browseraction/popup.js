var leftFoot = 50;



function sendClicks() {
    console.log("popup.js > sendClicks()");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"greeting": leftFoot}, function(response) {
            console.log(response.farewell);
        });
        
    });
}

$(function() {
    console.log("popup.js > OMD Extension ready");
    $('#button').click(function(){
        sendClicks();
    });
});

/*
window.onload = function() {
	document.getElementById("button").onclick = function() {
		chrome.extension.sendMessage({
	        type: "color-divs"
	    });
	}
}
*/