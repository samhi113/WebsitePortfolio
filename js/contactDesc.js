const contactDesc = document.getElementById("contactDesc");
const contactText = document.getElementById("contactText");

function emailDesc() {
    contactText.classList.add("contSec");
    contactText.textContent = "Send me a message! It can be a question, comment, concern, job offer, or even a joke! Actually, please send your best joke. It would be a great way to brighten up my day.";
}

function linkedinDesc() {
    contactText.classList.add("contSec");
    contactText.textContent = "Find a basic summary of my work experience, connections, and posts from LinkedIn. I don't spend a lot of time on there, but feel free to check it out!";
}

function resumeDesc() {
    contactText.classList.add("contSec");
    contactText.textContent = "If you want to get in contact about any possibilities, please feel free to get in contact via any of the methods listed on my resume. Also, check out how good it looks and how good it makes me look!";
}

function clearCont() {
    contactDesc.classList.remove("contSec");
    contactText.textContent = "";
}