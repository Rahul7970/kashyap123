var registrationForm = document.getElementById("registrationForm");
var firstNameData = document.getElementById("firstNameData");
var lastNameData = document.getElementById("lastNameData");
var emailData = document.getElementById("emailData");
var registrationData = document.getElementById("registrationData");

registrationForm.addEventListener("submit", function(event) {
	event.preventDefault();
	displayRegistrationData();
	printRegistrationData();
});

function displayRegistrationData() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	firstNameData.textContent = "First Name: " + firstName;
	lastNameData.textContent = "Last Name: " + lastName;
	emailData.textContent = "Email: " + email;
	registrationData.style.display = "block";
}

function printRegistrationData() {
	var printContents = "<h2>Registration Data</h2><p>" + firstNameData.textContent + "</p><p>" + lastName;
}




