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

// *01-intro-page 만들어 줄 부분
makePage(root, 'section', 'intro');
console.log(root.children);

// *introPage style
const introPage = document.getElementById('intro');
console.log(introPage); //잘 생성됨

setSize(introPage, `${hun}vw`, `${hun}vh`);
introPage.classList.add('border-bk');
setDisplay(introPage, 'flex', 'center', 'spave-between', 'column');
// introPage.style.gridTemplateRows = '1fr 1fr';

// todo: introPage의 자식으로 두개의 div를 자식요소로 붙여줘야 함
// *menuCon
introPage.innerHTML = `${makeElem('div', 'menu-con')}${makeElem('div', 'wave-con')}`;
const menuCon = introPage.firstElementChild;

// *menuCon children
menuCon.innerHTML = `${makeElem('ul')}${makeElem('ul')}`;

// const introPage

// *waveCon
const waveCon = introPage.lastElementChild;

// todo: 어느 영역인지 보이도록 해주기
console.log(introPage.children);
const introPageChild = Array.from(introPage.children);
console.log(introPageChild);
introPageChild.forEach(elem => {
  elem.classList.toggle('border-bk');
  setSize(elem, 'inherit', '50%');
})

// todo: waveCon의 자식요소로 .circle, wavwBg가 필요
waveCon.innerHTML = `${makeElem('div')}${makeElem('img', 'wave-bg')}`;
// console.log(waveCon.children);
setDisplay(waveCon, 'flex', 'center', 'end', 'column');

// *circle
const introCircle = waveCon.firstElementChild;
setBgColor(introCircle, '#ccc');
setSize(introCircle, `${hun/2}px`, `${hun/2}px`);
introCircle.classList.add('circle');
// *circle의 첫 시작 포인트
setPosition(introCircle, 'absolute', '', '120px', '', '90px');
// todo: animate()를 활용해서 움직임 넣어주기

// todo: 이 부분은 오목한 부분에 도달했을 때 적용해주기, 오목한 부분에 도달하면 글씨도 적용해주기
const bounce = [
  {bottom: '120px', right: '90px'},
  {bottom: '0px', right: '90px'},
  {bottom: '120px', right: '90px'}
];
const bounceTime = {
  duration: 500,
  iterations: Infinity
}
// introCircle.addEventListener('mouseover', () => {
//   introCircle.animate(bounce, bounceTime);
// });

window.addEventListener('click', () => {
  // console.log(window.clientX);
  console.dir(window.page);
})

// 
// const moveDown = [

// ]


console.log(introCircle);
// *waveBg
const waveBg = waveCon.lastElementChild;
console.log(waveBg);
waveBg.src = "./img/svg/3차디자인-wave.svg";