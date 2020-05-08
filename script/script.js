"use strict"
let progress = 0;

function addaPercent(prc) {
	if (progress >= 100){
		alert('АСТАНАВИСЬ, уже 100%');
	}
	else {
		progress += prc;
		if (progress >= 100) {progress = 100}
		$(".progress-bar").css('width', progress + '%');
		$(".progress-bar").text(progress + '%');
	}
}


$(".one").click(function(){
		addaPercent(1);
	    });

$(".three").click(function(){ 
		addaPercent(3);
	    });

$(".seven").click(function(){
		addaPercent(7);
	    });

