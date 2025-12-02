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