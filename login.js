var userGlobal;

function setUser(){
	var setRandom;
	setRandom = Math.round(Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*10000000);
	
	userGlobal = $("#User").val();
	if(userGlobal === undefined || userGlobal == ""){userGlobal = "Anon" + setRandom;}
	
	$("#skippy1").empty();
	$("#skippy1").append('<div class="col-xs-12"><h3 class="subtitle">Start Typing...</h3><textarea id="IO" class="col-xs-9"></textarea></div>');

	$("#skippy2").empty();
	$("#skippy2").append('<div class="col-xs-5"></div><div class="col-xs-2"><button value="Send" id="sendButton" tabIndex="-1" onclick="send()"><h6>Send</h6></Button></div><div class="col-xs-5"></div>');

	setInterval(function(){
		$("#IO").scrollTop($("#IO")[0].scrollHeight);
	}, 1000);
	
	createEventListeners();
}