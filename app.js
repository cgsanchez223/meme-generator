const memeCreator = document.getElementById("memeCreator");
const memesGoHere = document.getElementById("memesGoHere");

memeCreator.addEventListener("submit", function(e) {
    e.preventDefault();

    const topText = document.getElementById("topText").value;
    const imgMeme = document.getElementById("imgMeme").value;
    const bottomText = document.getElementById("bottomText").value;

    createMeme(topText, imgMeme, bottomText);

    memeCreator.reset();
}); // Listens for the submit click, and gathers data about the 3 fields.

function createMeme(topText, imgMeme, bottomText) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("memeSpace"); // Creates new div and then adds data to the empty class in html file.

    const createTop = document.createElement("div");
    createTop.classList.add("memeTop");
    createTop.textContent = topText;
    createDiv.appendChild(createTop);

    const createImg = document.createElement("img");
    createImg.src = imgMeme;
    createDiv.appendChild(createImg);

    const createBottom = document.createElement("div");
    createBottom.classList.add("memeBottom");
    createBottom.textContent = bottomText;
    createDiv.appendChild(createBottom);

    // After inputting data for our 3 fields, we also have to add a remove button to erase the image on click.
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function() {
        memesGoHere.removeChild(createDiv);
    });
    createDiv.appendChild(removeBtn);

    memesGoHere.appendChild(createDiv);
};