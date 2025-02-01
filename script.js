document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all fields.");
        event.preventDefault(); // Prevent form submission
    } else {
        alert("Thank you for submitting the form!");
    }
});
