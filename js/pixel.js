document.addEventListener("DOMContentLoaded", function() {
//create canvas grid
function addPixels() {
    let newPixel = document.createElement('div')
    newPixel.setAttribute('class', 'pixel')
    let myCanvas = document.getElementById('canvas')
    myCanvas.appendChild(newPixel)
  }
  for (let i = 0; i < 2604; i++) {
    addPixels()
  }
// create palette
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black']
  for (let j = 0; j < colors.length; j++) {
    let newColor = document.createElement('div')
    newColor.setAttribute('class', 'paintColor')
    newColor.style.backgroundColor = colors[j]
    let myPalette = document.getElementById('palette')
    myPalette.appendChild(newColor)
  }
  // pick paint color
  let paintColor = 'black'
  function changePaintColor(event) {
    paintColor = event.target.style.backgroundColor
    myBorder = document.getElementById('canvas')
    myBorder.style.backgroundColor = paintColor
  }
  //paint your picture
  function changePixelColor(event) {
    event.target.style.backgroundColor = paintColor
  }
  canvas.addEventListener('click', changePixelColor)
  palette.addEventListener('click', changePaintColor)

})
