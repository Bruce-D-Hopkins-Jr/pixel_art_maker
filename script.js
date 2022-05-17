//Function used to create the Pixel Art Maker Grid
function makeGrid() {
  let pixelHeight = document.querySelector('.pixel-height').value
  let pixelWidth = document.querySelector('.pixel-width').value
  let canvas = document.querySelector('.pixel-canvas')

//Initial for loop populates rows
  for (let i = 0; i < pixelHeight; i++) {
    let makeRow = document.createElement('tr')
    canvas.appendChild(makeRow)

//Nested for loop populates columns
    for (let j = 0; j < pixelWidth; j++) {
      let makeColumn = document.createElement('td')
      makeRow.appendChild(makeColumn)

      //Add listener to columns in order to 'paint' them
      makeColumn.addEventListener('click', function(){
          let paint = document.querySelector('.pixel-color').value
          makeColumn.style.background = paint
      })
    }
  }
}

//Prevents page from refreshing when submitting pixel canvas dimensions also makes grid.
document
  .querySelector('.art-maker')
  .addEventListener('submit', function (event) {
    event.preventDefault()
    makeGrid()
  })

//Clears Canvas from page
document
  .querySelector('.clear-button')
  .addEventListener('click', function clearCanvas() {
    let canvas = document.querySelector('.pixel-canvas')
    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild)
    }
  })
