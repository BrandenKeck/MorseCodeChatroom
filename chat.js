$(function(){
	var root = firebase.database().ref();
	
	root.remove();
	root.on("child_added", snap => {
		var addMe = snap.val();
		$("#Module").append("<b>"+ addMe.User +": &nbsp &nbsp </b>" + addMe.Message + "<br />");
		$("#Module").scrollTop($("#Module")[0].scrollHeight);
	});

});

function send(){
	var root = firebase.database().ref();
	
	if(buildCode == undefined){buildCode = translateMobileQuery();}
	var object = {"User": userGlobal, "Message": buildCode};
	
	if(buildCode != "" && buildCode != undefined){
		root.push().set(object);
	}
	
	$("#sendButton").blur();
	$("#IO").val('');
	$("#IO").focus();
	buildCode=undefined;
	code = [];
}