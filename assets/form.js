//Get element from ID
const form=document.getElementById("contactForm");

// Add event listener for when the form is submitted
form.addEventListener("submit", function(event){
    // prevent form from submitting (so we can vaildate first)
    event.preventDefault();

    // get values from the form fields
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getAnimations("message").value;

    // Validate form data
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return; //Exit functuon if fields are left empty
    }

    //Simple email validation (check if email contains "@" symbol)
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; //Exit function if email is invalid
    }

    //If validation passes, display an alert with the form data
    alert(`Form submitted successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    //optionally, clear the form after submission (if needed)
    form.reset();
})