function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function checkContact(e) {
    var contactNo = (e.which) ? e.which : e.keyCode;
    if (contactNo != 46 && contactNo > 31 && (contactNo < 48 || contactNo > 57)) {
        return false;
    }
    return true;
}

function checkMatchPassword() {
    var password = document.getElementById("signupUsername-password").value;
    var confirm = document.getElementById("signupUsername-confirm").value;

    if (password != confirm) {
        alert("Password do not Match");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const welcomeForm = document.querySelector("#welcome") //page where the data privacy agreement is displayed
    const loginForm = document.querySelector("#login"); //page for the login
    const createAccountForm = document.querySelector("#createAccount"); //page for creating an account
    const forgotForm = document.querySelector("#forgot"); //page for the login
    const confirmationForm = document.querySelector("#confirmation"); //page for confirming inputted personal information

    /*document.addEventListener("DOMContentLoaded", () => {
        const confirmationForm = document.querySelector("#confirmation") //page where the user needs to confirm the inputted data
        const loginForm = document.querySelector("#login"); //page for the login
        const createAccountForm = document.querySelector("#createAccount"); //page for creating an account*/

    document.querySelector("#linkCreateAccount").addEventListener("click", e => { //Creation of account
        e.preventDefault(); //prevents loading the default page
        loginForm.classList.add("form--hidden"); //do not show the login page
        createAccountForm.classList.remove("form--hidden"); //shows the create account page in the website
    });

    document.querySelector("#linkConfirmation").addEventListener("click", e => {
        e.preventDefault(); //prevents loading the default page
        createAccountForm.classList.add("form--hidden"); //do not show the  page
        confirmationForm.classList.remove("form--hidden"); //shows the confirmation page in the website
    });

    document.querySelector("#linkLogin").addEventListener("click", e => { //when in create account page but users already have an existing account
        e.preventDefault();
        loginForm.classList.remove("form--hidden"); //shows the login page
        createAccountForm.classList.add("form--hidden"); //do not show the create account page
        forgotForm.classList.add("form--hidden"); //do not show the create account page
    });

    document.querySelector("#linkForgot").addEventListener("click", e => { //when in create account page but users already have an existing account
        e.preventDefault();
        loginForm.classList.add("form--hidden"); //shows the login page
        forgotForm.classList.remove("form--hidden"); //do not show the create account page
    });

    document.querySelector("#linkWelcome").addEventListener("click", e => {
        e.preventDefault();
        welcomeForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });


    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length == 0) {
                setInputError(inputElement, "Do not leave field empty.");
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

function disagree() {
    alert("PLEASE AGREE WITH THE DATA SHARING AGREEMENT TO USE OUR APPLICATION")
}

function resetpw() {
    alert("Successfully reset pw please restart your app wahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hehez")
}

function successful() {
    alert("Your account has been successfully made.")
}