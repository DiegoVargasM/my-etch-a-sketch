//initial color value
let color = "black";
//initial click value
let click = false;

function populateBoard(size) {
    let board = document.querySelector(".board");
    //remove the previous divs
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //create grid
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        board.appendChild(square);
        //color grid items
        square.addEventListener("mouseover", colorSquare)
        //add class to grid items
        square.className = "square";
    }
}

populateBoard(16);

//only allow a given range of sizes
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        populateBoard(input);
    } else {
        console.log("pick a valid number");
    }
}

//enable coloring when click is true
function colorSquare() {
    if (click) {
        //add random color function
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = color;
        }
    }
}

//change color value
function changeColor(choice) {
    color = choice;
}

//reset board to default
function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    populateBoard(16);
}

//function to toggle drawing on/off with clicking
body = document.querySelector("body");
body.addEventListener("click", changeValue);

//change the boolean value of click
function changeValue(e) {
    //Only fire the function when not clicking a button
    if (e.target.tagName != "BUTTON") {
        click = !click;
        //show the user current mode
        mode = document.querySelector(".mode")
        if (click) {
            mode.textContent = "Mode: Coloring";
        } else {
            mode.textContent = "Mode: Not coloring";
        }
    }
}