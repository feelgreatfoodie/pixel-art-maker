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
  let colors = ['saddlebrown', 'darkred','red', 'orangered','orange', 'yellow', 'pink','bisque','khaki','darkkhaki','seagreen', 'green','cyan','skyblue','lightsteelblue','blue', 'darkblue', 'indigo', 'blueviolet', 'plum','black', 'grey','white']
  for (let j = 0; j < colors.length; j++) {
    let newColor = document.createElement('div')
    newColor.setAttribute('class', 'paintColor round')
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
  canvas.addEventListener('click', changePixelColor)

  palette.addEventListener('click', changePaintColor)

})
