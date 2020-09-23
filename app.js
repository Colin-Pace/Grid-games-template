/* Grid notes
    1. The grid is a square
    2. The limit is the length of one side
    3. The quotient of the css grid by div widths equals the limit */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelectorAll('.grid div');
  let limit = 15;
  let index = 97;
  grid[index].classList.add('player');

  function movePlayer(e) {
    grid[index].classList.remove('player');
    switch(e.keyCode) {
      case 37:
        if (index % limit === 0) index += 14;
        else if (index % limit !== 0) index -= 1;
        break;
      case 38:
        if (index <= 14 && index >= 0) index+= 210;
        else if (index > 15) index -= 15;
        break;
      case 39:
        if (index % limit >= limit - 1) index -= 14;
        else if (index % limit < limit - 1) index += 1;
        break;
      case 40:
        if (index >= 210) index -= 210;
        else if (index < 210) index += 15;
        break;
    }
    grid[index].classList.add('player');
  }

  document.addEventListener('keydown', movePlayer);
})
