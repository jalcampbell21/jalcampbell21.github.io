2. // Two more validation rule options for Smith's challenge--one checking for equality using the isNaN function, and one passing the variable answer as an argument to isNaN:

//Validation Option #1
var validateAnswer = function(event){
	event.preventDefault();

	var answer = document.getElementById('challenge1').value;
	var sum = 2 + 2;

	if(answer === isNaN || answer !== sum.toString()){
		document.getElementById('incorrect').style.display = "inline-block";
	} else {
		document.getElementById('correct').style.display = 'inline-block';
	};

	setTimeout(function(){
		document.getElementById('correct').style.display = "none";
		document.getElementById('incorrect').style.display = "none";
	}, 3000)
};

//Validation Option #2

var validateAnswer = function(event){
	event.preventDefault();

	var answer = document.getElementById('challenge1').value;
	var sum = 2 + 2;

	if(isNaN(answer) || answer !==sum.toString()){
		document.getElementById('incorrect').style.display = "inline-block";
	} else {
		document.getElementById('correct').style.display = 'inline-block';
	};

	setTimeout(function(){
		document.getElementById('correct').style.display = "none";
		document.getElementById('incorrect').style.display = "none";
	}, 3000)
};







