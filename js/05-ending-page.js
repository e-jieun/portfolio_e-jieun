import makePage from "./module/makepage.js";
// import makeElem from "./module/makeelem.js";
import {
  setSize,
  setDisplay,
  setPosition,
  setBgColor
} from "./module/css-function.js";
import hun from "./module/reset.js";
import makeElem from "./module/makeelem.js";

const root = document.getElementById('root');

// *05-ending-page 만들어 줄 부분
makePage(root, 'section', 'ending-page');
// console.log(root.children);

// *endingPage style
const endingPage = document.getElementById('ending-page');
// console.log(endingPage); //잘 생성됨

setSize(endingPage, `${hun}vw`, `${hun}vh`);
endingPage.classList.add('border-bk');
setDisplay(endingPage, 'flex', 'center', 'spave-between', 'column');