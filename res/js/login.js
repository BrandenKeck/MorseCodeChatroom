var userGlobal;

function setUser(){
	var setRandom;
	setRandom = Math.round(Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*10000000);
	
	userGlobal = $("#User").val();
	if(userGlobal === undefined || userGlobal == ""){userGlobal = "Anon" + setRandom;}
	
	$("#skippy1").empty();
	$("#skippy1").append('<div class="col-xs-12"><h3 class="subtitle">Start Typing...</h3><textarea id="IO"></textarea></div>');

	$("#skippy2").empty();
	$("#skippy2").append('<div class="col-xs-2 col-sm-5"></div><div class="col-xs-8 col-sm-2"><button value="Send" id="sendButton" tabIndex="-1" onclick="send()"><h6>Send</h6></Button></div><div class="col-xs-2 col-sm-5"></div>');
	
	createEventListeners();
	sendLogin();
}