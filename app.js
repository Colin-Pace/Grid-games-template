/* Grid notes
    1. The grid is a square
    2. The limit is the length of one side
    3. The quotient of the grid width in pixels
            by a div width equals the limit */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById("grid");
  let limit = 25;
  let index = 97;
  const playerColor = "orange";
  const gridColor = "white";

  for (let i = 0; i < limit * limit; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "gridElement");
    grid.appendChild(div);
  }

  const gridElements = document.getElementsByClassName("gridElement");
  gridElements[index].style.backgroundColor = playerColor;

  function movePlayer(e) {
    gridElements[index].style.backgroundColor = gridColor;
    switch(e.keyCode) {
      case 37:
        if (index % limit === 0) index += limit - 1;
        else if (index % limit !== 0) index -= 1;
        break;
      case 38:
        if (index <= limit - 1 && index >= 0) index += (limit * limit) - limit;
        else if (index > limit - 1) index -= limit;
        break;
      case 39:
        if (index % limit >= limit - 1) index -= limit - 1;
        else if (index % limit < limit - 1) index += 1;
        break;
      case 40:
        if (index >= (limit * limit) - limit) index -= (limit * limit) - limit;
        else if (index < (limit * limit) - limit) index += limit;
        break;
    }

    gridElements[index].style.backgroundColor = playerColor;
  }

  document.addEventListener('keydown', movePlayer);
})
