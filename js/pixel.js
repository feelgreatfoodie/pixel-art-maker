document.addEventListener("DOMContentLoaded", function() {
//create canvas grid
let myCanvas = document.getElementById('canvas')
let myPalette = document.getElementById('palette')
let colorWell = document.getElementById('colorWell')

function addPixels() {
    let newPixel = document.createElement('div')
    newPixel.setAttribute('class', 'pixel')
    myCanvas.appendChild(newPixel)
  }
  for (let i = 0; i < 2604; i++) {
    addPixels()
  }
// create palette
  let colors = ['saddlebrown', 'darkred','red', 'orangered','orange', 'yellow', 'pink','bisque','khaki','darkkhaki','seagreen', 'green','cyan','skyblue','lightsteelblue','blue', 'darkblue', 'indigo', 'blueviolet', 'plum','black', 'grey','white']
  for (let j = 0; j < colors.length; j++) {
    let newColor = document.createElement('div')
    newColor.setAttribute('class', 'paintColor round')
    newColor.style.backgroundColor = colors[j]
    myPalette.appendChild(newColor)
  }
  // pick paint color
  let paintColor = 'black'
  function changePaintColor(event) {
    paintColor = event.target.style.backgroundColor
    myCanvas.style.backgroundColor = paintColor
  }
  function changePaintColor2(event) {
    paintColor = colorWell.value
    console.log(paintColor)
    myCanvas.style.backgroundColor = paintColor
  }
  //paint your picture
  function changePixelColor(event) {
    event.target.style.backgroundColor = paintColor
  }
  function changePixelColor2(event) {
    event.target.style.backgroundColor = paintColor
  }
  canvas.addEventListener('mousedown', changePixelColor)
  canvas.addEventListener('mousedown', changePixelColor2)
  canvas.addEventListener('mouseup', changePixelColor)
  palette.addEventListener('click', changePaintColor)
  colorWell.addEventListener('change', changePaintColor2)

})
