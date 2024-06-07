document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Display the response message
    document.getElementById("responseMessage").style.display = "block";

    // Optionally, you can clear the form fields after submission
    document.getElementById("contactForm").reset();
});
