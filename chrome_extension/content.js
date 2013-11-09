chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

        if (request["greeting"]) {

        	console.log("Value: " + request["greeting"]);
			$(document).mousemove(function(e) {
			    window.x = e.pageX;
			    window.y = e.pageY;
			    $("body").append('<div id="dog"></div><div id="people"></div>');
               	$('#dog').css({"width":"133px", "height":"79px", "background":"url('http://trytobegood.com/hack/fulldog.png') no-repeat", "top": window.y-25, "left": window.x+30, "z-index":"10000000", "position":"absolute"});
               	
               	
			});
			
/*
			$(document).ready(function($) {
				$("input.nav-submit-input").val("fast");
			});
*/
			
            
           } else {
	           console.log("didn't work");
           }
});


