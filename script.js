document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const firstName = document.getElementById("first-name");
    const middleInitial = document.getElementById("middle-initial");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrorMessages();

        if (!validateInput(firstName.value)) {
            displayErrorMessage("first-name-error", "First Name is required");
            markInputAsError(firstName);
        }

        if (!validateInput(middleInitial.value)) {
            displayErrorMessage("middle-initial-error", "Middle Initial is required");
            markInputAsError(middleInitial);
        }

        if (!validateInput(lastName.value)) {
            displayErrorMessage("last-name-error", "Last Name is required");
            markInputAsError(lastName);
        }

        if (!validateEmail(email.value)) {
            displayErrorMessage("email-error", "Invalid Email Address");
            markInputAsError(email);
        }

        if (validateInput(firstName.value) && validateInput(middleInitial.value) && validateInput(lastName.value) && validateEmail(email.value)) {
            alert("Success!");
            form.reset();
        }
    });

    function validateEmail(input) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(input);
    }

    function validateInput(input) {
        return input.trim() !== "";
    }

  

    function displayErrorMessage(id, message) {
        const errorMessage = document.getElementById(id);
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }

    function markInputAsError(inputField) {
        inputField.style.border = "1px solid red"; 
    }

    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((errorMessage) => {
            errorMessage.textContent = "";
            errorMessage.style.display = "none";
        });

        const inputFields = [firstName, middleInitial, lastName, email];
        inputFields.forEach((inputField) => {
            inputField.style.border = "1px solid #ccc"; 
        });
    }
});