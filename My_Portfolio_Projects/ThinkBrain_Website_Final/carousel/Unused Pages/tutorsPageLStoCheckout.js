//JAVASCRIPT//													
	  
	  //________________saveTutorForm() FUNCTION_______________
	  //This function will save the tutor's input when the "Submit" button is clicked
		
	  function getTutorRateAndHours() {

		// Put the object into storage
		localStorage.setItem('tutor', JSON.stringify(tutor));

		// Retrieve the object from storage
		var retrievedObject = localStorage.getItem('tutor');

		console.log('tutor.rate', JSON.parse(tutor.rate));