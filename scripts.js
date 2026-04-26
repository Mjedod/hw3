function validateForm(event) {
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if (name.value == "" || email.value == "") {
        alert("Please fill out all required fields.");
        event.preventDefault();
    } else {
        alert("Form submitted successfully.");
    }
}

function toggleDescription(id) {
    var desc = document.getElementById(id);

    if (desc.style.display == "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}

function setupQuote() {
    var quote = document.querySelector("blockquote");

    if (quote) {
        quote.addEventListener("mouseover", function () {
            quote.style.backgroundColor = "lightyellow";
            quote.style.fontStyle = "italic";
        });

        quote.addEventListener("mouseout", function () {
            quote.style.backgroundColor = "";
            quote.style.fontStyle = "";
        });
    }
}

function addLoadTime() {
    var footer = document.querySelector("footer");

    if (footer) {
        var date = new Date();
        var p = document.createElement("p");
        var text = document.createTextNode("Page loaded on: " + date);

        p.appendChild(text);
        footer.appendChild(p);
    }
}

window.onload = function () {
    setupQuote();
    addLoadTime();
};