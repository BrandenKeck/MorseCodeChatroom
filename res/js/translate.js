var code = new Array();
var buildCode;
var morseDict = [[65, "A","*-"], 
			[66, "B","-***"],
			[67, "C","-*-*"],
			[68, "D","-**"],
			[69, "E","*"],
			[70, "F","**-*"],
			[71, "G","--*"],
			[72, "H","****"],
			[73, "I","**"],
			[74, "J","*---"],
			[75, "K","-*-"],
			[76, "L","*-**"],
			[77, "M","--"],
			[78, "N","-*"],
			[79, "O","---"],
			[80, "P","*--*"],
			[81, "Q","--*-"],
			[82, "R","*-*"],
			[83, "S","***"],
			[84, "T","-"],
			[85, "U","**-"],
			[86, "V","***-"],
			[87, "W","*--"],
			[88, "X","-**-"],
			[89, "Y","-*--"],
			[90, "Z","--**"],
			[48, "0","-----"],
			[49, "1","*----"],
			[50, "2","**---"],
			[51, "3","***--"],
			[52, "4","****-"],
			[53, "5","*****"],
			[54, "6","-****"],
			[55, "7","--***"],
			[56, "8","---**"],
			[57, "9","----*"],
			[190, ".","*-*-*-"],
			[188, ",","--**--"],
			[222, "'","*----*"],
			[191, "/","-**-*"],
			[59, ";","-*-*-*"],
			[61, "=","-***-"],
			[107, "+","*-*-*"],
			[173, "-","-****-"],
			[32, " ","|"]];

function createEventListeners(){
	document.addEventListener("keydown", function(e) {
		e.preventDefault();
					
		if(e.keyCode === 13){
			send();
		}
		
		for(var i=0; i<morseDict.length; i++){
		  if(morseDict[i][0] == e.which){
			  code.push(morseDict[i][2]+"   ");
			  buildMe();
			  $("#IO").scrollTop($("#IO")[0].scrollHeight);
		  }
		}
		
		if(e.which == 8){
			code.pop();
			buildMe();
			$("#IO").scrollTop($("#IO")[0].scrollHeight);
		}
	});
}

function translateMobileQuery(){
	var breakdown = $("#IO").val();
	var array = breakdown.split('');
	var rebuilt = "";
	
	for(var i=0; i<array.length; i++){
		for(var j=0; j<morseDict.length; j++){
			if(array[i] == morseDict[j][2]){
				rebuilt += morseDict[j][2];
				rebuilt += "  ";
				break;
			}
			else if(array[i].toUpperCase() == morseDict[j][1]){
				rebuilt += morseDict[j][2];
				rebuilt += "  ";
				break;
			}
		}
	}
	
	if(rebuilt == ""){rebuilt = "[error]";}
	
	return rebuilt;
}

function buildMe(){
	buildCode="";
	for(var j=0; j<code.length; j++){
		buildCode+=code[j];
	}

	//$("#IO").empty();
	$("#IO").val(buildCode);
}