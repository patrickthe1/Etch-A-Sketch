let container = document.querySelector(".container");

for(let i= 0; i < 256; i++){
    let square = document.createElement("div");

    square.classList.add("square");

    container.appendChild(square);
}

const setGrid = document.getElementById("setGrid");

setGrid.addEventListener("click", drawGrid);

function drawGrid() {
    const gridInput = document.querySelector("#gridInput");
    if(gridInput.value >= 100 ){
        alert("Cannot go beyond 100");
    }else if(gridInput.value <= 1 ){
        alert("invalid");
    } else{
    const newSize = 512  / parseInt(gridInput.value);
    let totalSquares = parseInt(gridInput.value) * parseInt(gridInput.value);
  
    container.innerHTML = ""; // Clear existing grid.
  
    for (let i = 0; i < totalSquares; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = newSize + "px";
      square.style.height = newSize + "px";
      container.appendChild(square);
    }
}
   gridInput.value = "";
  }

  let isDrawing = false;

  container.addEventListener("mousedown", () => {
    isDrawing = true;
  });
  
  container.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  
  container.addEventListener("mousemove", handleMouseMove);
  

  function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${blue},${green})`

    return randomColor;
  }

  function handleMouseMove(e){
   

    if(isDrawing){
        let currentSquare = e.target;
        if(currentSquare.classList.contains("square")){
            currentSquare.style.backgroundColor = getRandomColor();
        }
    }
  }

  function reset(){
  let children = container.children;

  Array.from(children).forEach(child =>{
    child.style.backgroundColor = "rgba(0,0, 0,0.1)";
  })
  }