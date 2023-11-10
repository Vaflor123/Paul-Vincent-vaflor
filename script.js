document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        var email = document.getElementById("exampleInputEmail1").value;
        var password = document.getElementById("exampleInputPassword1").value;

        // Simulate authentication logic (replace with actual authentication logic)
        if (email === "vaflor159@gmail.com" && password === "password123") {
            // Redirect to index.html on successful login
            window.location.href = "./index.html";
        } else {
            // Show error message (you can customize this part)
            alert("Invalid credentials. Please try again.");
        }
    });
});
