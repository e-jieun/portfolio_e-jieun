// import js
import {
  getAppendName,
  setBgColor,
  setDisplay,
  setSize,
  setPosition
} from './css-function.js';
import colorObj from "./color.js";
let hun = 100;

// *document.body
document.body.setAttribute(`style`, `margin: 0; padding: 0;`);

// *root
const root = document.getElementById('root');
console.log(root);

// *root style
// overflowX: hidden; => 가로 overflow를 컨트롤
root.style.overflowX = `hidden`;
setDisplay(root, `grid`);
root.style.fontFamily = `'Roboto Slab', serif`;