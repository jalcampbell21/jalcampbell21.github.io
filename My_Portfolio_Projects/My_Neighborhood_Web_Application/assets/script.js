//Create an email and password that users can log in with

var validEmail = "user_1@gmail.com";
var validPassword = "user_1";

var signOut = function(){
	document.getElementById("welcome_msg").innerHTML = '';
	document.getElementById("logged_in").style.display = "none";
	document.getElementById("logged_out").style.display = "block";
	document.getElementById("sign_in").style.display = "block";
	document.getElementById("sign_out").style.display = "none";
}

var signIn = function(email, password){
	document.getElementById("welcome_msg").innerHTML = '<p class="welcome">Welcome to My Neighborhood!</p>';
	document.getElementById("logged_in").style.display = "block";
	document.getElementById("logged_out").style.display = "none";
	document.getElementById("sign_out").style.display = "block";
	document.getElementById("sign_in").style.display = "none";
}

// the var fn below handles the sign in button or makes it interactive
var signInModal = function(){
	var sign_in = prompt("Please enter your e-mail address and password to sign in.");
	if(email && password !== null && email && password !==''){
		if(validEmail === email && validPassword === password){
			var validUser = true;
			signIn(email, password);
		alert("Sorry! You need to enter an e-mail address and password!");
	};
};


var validateAnswer = function(event){
	event.preventDefault();

	var answer = document.getElementById('challenge1').value;
	var sum = 2 + 2;

	if(answer === sum.toString()){
		document.getElementById('correct').style.display = "inline-block";
	} else {
		document.getElementById('incorrect').style.display = 'inline-block';
	};

	setTimeout(function(){
		document.getElementById('correct').style.display = "none";
		document.getElementById('incorrect').style.display = "none";
	}, 3000)
};

var addToFavs = function(title, friend){
	var paragraph = '<p>' + title + ' by ' + friend + '</p>';
	document.getElementById("yay_favs").style.display = "block";
	document.getElementById("no_favs").style.display = "none";
	document.getElementById("recent_fav").innerHTML = paragraph;
};

var favorite = function(title, friend, id){
	//fill in with code
	document.getElementById(id).style.color = "blue";
	document.getElementById(id).style.fontSize = "2.2em";
	document.getElementById(id).style.transition = "0.4s linear all";
};

	setTimeout(function(){
		document.getElementById(id).style.color = "rgb(180, 0, 80)";
		document.getElementById(id).style.fontSize = "2em";
		document.getElementById(id).style.transition = "0.4s linear all";
	}, 500)

	alert("You have favorited " + title + " by " + friend);
	addToFavs(title, friend);
};