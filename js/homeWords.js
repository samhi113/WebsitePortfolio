function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const homeSection = document.getElementById("homeSection");
homeSection.textContent = "SAM HIGGINS";
sleep(5000).then(() => { });

for (let i = 0; i < (homeSection.textContent.length + 1); i++) {
    newLastPos = homeSection.textContent.length - i;
    newText =  homeSection.textContent.slice(0, newLastPos);
    sleep(250).then(() => {  });
    homeSection.textContent = newText;
    console.log(newText)
}