// show alert
function showAlert() {
    alert("Hello World");
}

// call a function after 2 seconds
setTimeout(showAlert, 2000);

// add new paragraph
function addParagraph() {
    let container = document.getElementById("container");
    let newPara = document.createElement("p");
    newPara.textContent = "Hello World";
    container.append(newPara);
}

// call a function after 2 seconds
let timer = setInterval(addParagraph, 2000);

// The interval will be cleared by user click
let btnUser = document.getElementById("clear");
btnUser.onclick = () => { 
    clearInterval(timer);
}

// Instead of clicking on the button  as there will be 5 paragraphs inside
setInterval(() => {
    let listPara = document.querySelectorAll("p");
    if (listPara.length == 5) {
        clearInterval(timer);
    }
}, 1000);





