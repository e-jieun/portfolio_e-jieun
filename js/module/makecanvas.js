const makeCanvas = (elem, id, width, height) => {
  // if(typeof width === 'number' && typeof height === 'number'){
    elem.innerHTML = `<canvas id="${id}" width="${width}" height="${height}"></canvas>`
  // }
}

export default makeCanvas;