import { setPosition, setSize } from "./module/css-function.js";
import makePage from "./module/makepage.js";
import hun from "./module/reset.js";

const root = document.getElementById('root');
// *00-배경으로 사용될 water-bg 만들어 줄 부분
makePage(root, 'section', 'water-bg');
// console.log(root.children);

// * waterBg
const waterBg = document.getElementById('water-bg');
// console.log(waterBg);
// *배경을 담을 상자 크기
setSize(waterBg, `${hun}vw`, `${hun*2}vh`);
setPosition(waterBg, 'absolute', `${hun}vh`);
waterBg.style.zIndex = -1; 
waterBg.classList.add('bg-color');