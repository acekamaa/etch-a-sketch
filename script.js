const container = document.querySelector("#container");
const gridSize = 16;
const totalSquares = gridSize * gridSize;

// adding square grids 
for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

// adding Hover effect to leave a pixelated path
const squares = document.querySelectorAll(".square");

squares.forEach(square => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "green"; // trail color
  });
});

const button = document.querySelector("#new-grid-btn");

function createGrid(size) {
    container.innerHTML = ""; //clear old grid

    // set CSS grid columns/rows
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // create squares
    const totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // hover effect (leaves trail)
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

// button click → ask user for size
button.addEventListener("click", () => {
    let userInput = prompt("Enter grid size (max 100):");

    if (userInput === null) return; // user cancelled

    userInput = parseInt(userInput);

    if (Number.isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    createGrid(userInput);
});

// generate default grid on load
createGrid(16);