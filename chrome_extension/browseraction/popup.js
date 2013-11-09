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
    
    
    var objectIDarray = ["jCUiHfDH8Y", "3xO9WcjatS", "oSgbevAvgB"];
    
    Parse.initialize("WbXWyCHDLZJbApq74W1a95YkYekli5wDMhBGVYCj", "4iwEiCRAR2ynXQ6V4aqC5YdKkwkpvRUITUjgBkfR");
    var billingAccount = Parse.Object.extend("billingAccount");
	var query = new Parse.Query(billingAccount);
	var name, company, photo, article_header, article_link, political_leaning, politics, lifestyle_title, lifestyle, whereabouts;

	for (i = 0; i < objectIDarray.length; i++) {
		query.get(objectIDarray[i], {
		  success: function(billingAccount) {
		  	name = billingAccount.get("name");
		  	company = billingAccount.get("company");
		  	photo = billingAccount.get("photo");
		  	article_header = billingAccount.get("article_header");
		  	article_link = billingAccount.get("article_link");
		  	political_leaning = billingAccount.get("political_leaning");
		  	politics = billingAccount.get("politics");
		  	lifestyle_title = billingAccount.get("lifestyle_title");
		  	lifestyle = billingAccount.get("lifestyle");
		  	whereabouts = billingAccount.get("whereabouts");
		  	
		  	console.log(photo._url);

		  	$('#tracking').append('<h1 style="font-size:1em float: left;"><img src="'+ photo._url +'">' + name + '</h1>' + 
		  		'<h3 style="margin-top: -20px; font-size: 0.6em;"> Title: ' + company + '</h3>' + 
		  		'Article: <a style=" margin-top: -25px; " href="' + article_link + '"style="font-size: 1em; margin-top:0">' + article_header + '</a>' + 
		  		'<h4> Politics: ' + political_leaning + '</h4>' + '<h5> Lifestyle: '+ lifestyle_title +'</h5>'+ '<h6> Whereabouts: ' + whereabouts + '</h6>'
		  		);
		  },
		  error: function(object, error) {
		    console.log("not found");
		    // The object was not retrieved successfully.
		    // error is a Parse.Error with an error code and description.
		  }
		});
	}

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