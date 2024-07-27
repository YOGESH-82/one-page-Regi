const error_msg = document.getElementById("error-msg");
const submitError = document.getElementById("submit-error");
const emailInput = document.getElementById("e-mail");
const checkIMG = document.getElementById("checkIMG")

emailInput.addEventListener('keyup', (e) => {
    validateEmail();
});


const submitBtn = document.getElementById('sub-btn');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting if there are validation errors
    validateForm();
});

// Email Validation
function validateEmail(){
    let email = emailInput.value;

    if(email.length === 0){
        error_msg.innerHTML = "Email is required";
        checkIMG.classList.add("fa-user")// old icon add here
        checkIMG.innerHTML = ''; // clear 
        return false;
    }
    if(!email.match(/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        error_msg.innerHTML= "Invalid Email";
        checkIMG.classList.add("fa-user") //old icon add here
        checkIMG.innerHTML = ''; //clear
        return false;
    }
    checkIMG.innerHTML = '<img src="../img/check1.png" class="check1"></img>'; // new icon (check here) add here 
    error_msg.innerHTML = ""; // Clear error message if valid
    checkIMG.classList.remove("fa-user") // old icon remove here
    return true;
}




function validateForm(){
    let isFormValid = true;

    isFormValid = validateEmail() && isFormValid;

    if(!isFormValid){
        submitError.style.display = 'block';
        submitError.innerHTML = 'fix above errors to signIn';

        setTimeout(function () {
            submitError.style.display = "none";
        }, 3000);
    }
}
