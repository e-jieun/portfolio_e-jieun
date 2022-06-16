export const setBgColor = (elem, bgColor) => {
  elem.style.backgroundColor = bgColor;
}

export const setDisplay = (elem, display, align = 'center', justify = 'center', direction = 'row') => {
  if (typeof elem === 'object') {
    elem.style.display = display;
    elem.style.alignItems = align;
    elem.style.justifyContent = justify;
    elem.style.flexDirection = direction;
  } else {
    console.error('try again');
  }
}

export const setSize = (elem, width = null, height = null) => {
  if (typeof elem === 'object') {
    elem.style.width = width;
    elem.style.height = height;
  } else {
    console.error('try again');
  }
}

export const setPosition = (elem, position, top = null, bottom = null, left = null, right = null, zIndex = null) => {
  if (typeof elem === 'object') {
    elem.style.position = position;
    elem.style.top = top;
    elem.style.bottom = bottom;
    elem.style.left = left;
    elem.style.right = right;
    elem.style.zIndex = zIndex;
  }
}

export const borderBk = (elem, px = 1, style = 'solid', color = '#000') => {
  elem.style.border = `${px}px ${style} ${color}`; 
}

export default borderBk;