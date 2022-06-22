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
setSize(root, `${hun}vw`, `${hun}vh`);
root.style.boxSizing = 'border-box';
root.style.overflow = 'hidden';
root.style.fontFamily = `'Montserrat', Noto Sans`;