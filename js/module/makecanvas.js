const makeCanvas = (elem, id, width, height) => {
    elem.innerHTML = `<canvas id="${id}" width="${width}" height="${height}"></canvas>`
}

export default makeCanvas;