const sitelogo = document.getElementById("siteLogo");
const navButton = document.getElementById("navButton");
const home = document.getElementById("homeButton");
const about = document.getElementById("aboutButton");
const work = document.getElementById("workButton");
const contact = document.getElementById("contactButton");
const rects = document.getElementById("rects");
function clickFunction() {
    if (home.style.display === "block") {
        console.log("set to false");
        home.style.display = "none";
        about.style.display = "none";
        work.style.display = "none";
        contact.style.display = "none";
        navButton.style.backgroundColor = "var(--heavy-gold)";
        navButton.style.borderColor = "var(--light-gold)";
    } else {
        console.log("set to true");
        home.style.display = "block";
        about.style.display = "block";
        work.style.display = "block";
        contact.style.display = "block";
        navButton.classList.add("navHover");
    }
}

function mouseOverFunction() {
    navButton.classList.add("navHover");
}

function mouseOutFunction() {
    if (home.style.display != "block") {
        navButton.classList.remove("navHover");
    }
}