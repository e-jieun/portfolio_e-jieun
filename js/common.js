// import js
import {
  setDisplay,
  setSize
} from './module/css-function.js';
import hun from './module/reset.js';

// *document.body
document.body.setAttribute(`style`, `margin: 0; padding: 0;`);

// *root
const root = document.getElementById('root');
console.log(root);

// *root style
// todo: overflowX: hidden; => 가로 overflow를 컨트롤
// todo: box-sizing: border-box로 변경하는 편이 더 낫다
// root.style.overflowX = `hidden`;
// setDisplay(root, `grid`);
// root.style.fontFamily = `'Roboto Slab', serif`;