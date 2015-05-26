//the var fn below gets the elements by their id's or selects them


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