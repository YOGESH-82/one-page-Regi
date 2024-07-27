
//1st page

document.getElementById('regibtn1').addEventListener('click', (e) => {
    e.preventDefault();

    let fullname = document.getElementById('fullname').value;
    let companyname = document.getElementById('companyname').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let terms = document.getElementById('check_1').checked;

    // Check if all fields are filled
    if (fullname && companyname && number && email && password && terms) {
        // All fields are filled, proceed to the next page
        // You can change the URL to the desired page
        goToNextStep('step2');
    } else {
        // Show error message
     alert("fill required")

        console.log("error");

    }

});

//2nd page
document.getElementById('reginextbtn1back').addEventListener('click', (e) => {
    goToPreviousStep('step1');
})

document.getElementById('reginextbtn2next').addEventListener('click', (e) => {
    e.preventDefault();

    let address = document.getElementById('address').value;
    let google_address = document.getElementById('google_address').value;
    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;
    let zipcode = document.getElementById('zipcode').value;

    // Check if all fields are filled
    if (address && google_address && country && state && city && zipcode) {
        // All fields are filled, proceed to the next page
        // You can change the URL to the desired page
        goToNextStep('step3');
    } else {
        // Show error message
     alert("fill required")

        console.log("error");

    }
});



// 3rd Page

document.getElementById('regi-page3-btn-back').addEventListener('click', (e) => {
    goToPreviousStep('step2');
})

document.getElementById('regi-page3-btn-next').addEventListener('click', (e) => {
    e.preventDefault();

    let team = document.getElementById('teamsize').value;
  

    // Check if all fields are filled
    if (team) {
        // All fields are filled, proceed to the next page
        // You can change the URL to the desired page
        goToNextStep('step4');
    } else {
        // Show error message
     alert("fill required")

        console.log("error");

    }
});







function goToNextStep(nextStepId) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
    // Show the next step
    document.getElementById(nextStepId).style.display = 'block';
    // Update URL without reloading the page
    history.pushState(null, '', nextStepId);
}

function goToPreviousStep(previousStepId) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
    // Show the previous step
    document.getElementById(previousStepId).style.display = 'block';
    // Update URL without reloading the page
    history.pushState(null, '', previousStepId);
}

window.addEventListener('popstate', function (event) {
    // Handle the browser back/forward buttons
    const stepId = location.pathname.split('/').pop();
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
    if (document.getElementById(stepId)) {
        document.getElementById(stepId).style.display = 'block';
    } else {
        document.getElementById('step1').style.display = 'block';
    }
});
