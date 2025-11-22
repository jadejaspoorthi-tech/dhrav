document.addEventListener("DOMContentLoaded"), function () {
    // Get all elements with the class "box"
    let boxes = document.getElementsByClassName("box3");

    // Log the collection of boxes to the console
    console.log(boxes);

    var boxColor = "black";

    // Access and style the element with ID "redbox"
    let redbox = document.getElementById("redbox");
    if (redbox) {
        redbox.style.backgroundColor = "blue-color"; // Ensure the ID exists
    }
}