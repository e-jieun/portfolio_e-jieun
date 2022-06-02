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

console.log(root.children);
const section = root.children;
const sectionArr = Array.from(section);
// root.children요소들의 크기를 화면 100vw, 100vh의 한 페이지씩 설정해주기
sectionArr.forEach((element) => {
  element.setAttribute('style', `width: ${hun}vw; height: ${hun}vh;`);
})