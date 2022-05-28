let hun = 100;
const colorObj = {
  colorBk: `#000`,
  colorC4: `#c4c4c4`,
  color33: `#333`
}
// function
function getAppendName(element) {
  // 언제 가져오면 안되는가?
  // null, 빈값일 때는 가져오면 안된다
  if (element.tagName !== null && element.tagName !== '') {
    return element.tagName;
  }
}

function setBgColor(elem, bgColor) {
  elem.style.backgroundColor = bgColor;
}

function setDisplay(elem, display, align = 'center', justify = 'center', direction = 'row') {
  if (typeof elem === 'object') {
    elem.style.display = display;
    elem.style.alignItems = align;
    elem.style.justifyContent = justify;
    elem.style.flexDirection = direction;
  } else {
    console.error('try again');
  }
}

function setSize(elem, width = null, height = null) {
  if (typeof elem === 'object') {
    elem.style.width = width;
    elem.style.height = height;
  } else {
    console.error('try again');
  }
}

function setPosition(elem, position, top = null, bottom = null, left = null, right = null) {
  if (typeof elem === 'object') {
    elem.style.position = position;
    elem.style.top = top;
    elem.style.bottom = bottom;
    elem.style.left = left;
    elem.style.right = right;
  }
}

// document.body
document.body.setAttribute(`style`,`margin: 0; padding: 0;`);

const root = document.getElementById('root');
console.log(root);
// 가로 overflow를 컨트롤
root.style.overflowX = `hidden`;
setDisplay(root, `grid`);