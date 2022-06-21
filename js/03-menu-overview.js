import {
  setDisplay,
  setSize,
  borderBk,
  setPosition,
  setBgColor
} from "./module/css-function.js";
import makePage from "./module/makepage.js";
import makeElem from "./module/makeelem.js"
import hun from "./module/reset.js";
import makeCanvas from "./module/makecanvas.js";
import colorObj from "./module/color.js";

const root = document.getElementById('root');
// *03-menu-overview page 만들어 줄 부분
makePage(root, 'section', 'menu-overview');
// console.log(root.lastElementChild);

// *#menu-overview
const overviewPage = document.getElementById('menu-overview');
// console.log(overviewPage);
setSize(overviewPage, `${hun}vw`, `${hun}vh`);
borderBk(overviewPage);
overviewPage.style.color = `${colorObj.colorFf}`;

// todo: overviewSection sizing
setDisplay(overviewPage, 'flex', 'center', 'center');

// *div data-section = index*2
overviewPage.innerHTML = `${makeElem('div')}${makeElem('div')}`;
// console.log(overviewPage);
const overviewSection = Array.from(overviewPage.children);
// console.log(overviewSection);
// todo: set data-section = index+1;
overviewSection.forEach((elem, index) => {
  borderBk(elem);
  setSize(elem, `45vw`, 'inherit');
  if (index === 0) {
    index += 1;
    elem.setAttribute('data-section', index);
    // makeElem('div', 'project-stroke', 'Project');
    makePage(elem, 'div', 'project-stroke');
  } else {
    index += 1;
    elem.setAttribute('data-section', index);
    elem.innerHTML = `${makeElem('div')}`;
    // console.log(elem);
  }
})

// *canvas#projText => stroke text
const projText = document.getElementById('project-stroke');
borderBk(projText);
// console.dir(projText);

// *bigTxtCon
const bigTxtCon = overviewPage.firstElementChild;
console.log(bigTxtCon);


// *bigTxt
bigTxtCon.innerHTML = makeElem('div', '', 'PROJECT');
const bigTxt = bigTxtCon.firstElementChild;
console.log(bigTxt);
bigTxt.setAttribute('style', `transform: rotate(${-hun/10*9}deg); font-size: 16rem; font-weight: ${hun*8}`);
setPosition(bigTxt, 'relative', '', '-42vh', '-20vh', '');
bigTxt.classList.add('stroke-font');


// *menu con -> overviewPage.children[1];
const overviewMenuCon = overviewPage.lastElementChild;
// console.log(overviewMenuCon);

// *div -> small text<ul>, menu text con<ul>을 감싸줄 부분들
overviewMenuCon.innerHTML = `${makeElem('div', '', `${makeElem('ul', 'small-text', 'Project Overview')}${makeElem('ul', 'menu-text')}`)}`;
// console.log(overviewMenuCon.children);

// *#small-text
const smallTxt = document.getElementById('small-text');
console.log(smallTxt);
smallTxt.style.textAlign = `center`;
smallTxt.style.fontSize = `0.8rem`;

// *ul > li
const menuTextCon = document.getElementById('menu-text');
const projNameArr = ['프로젝트 보라도라', '프로젝트 다닥', 'The Volunteers 랜딩 페이지', '개인 프로젝트'];

// *li*8 추가
let li = '';
for (let i = 0; i < 8; i++) {
  li += makeElem('li');
}
// console.log(li);
menuTextCon.innerHTML = li;
// console.log(menuTextCon);

// *li rowGap
setSize(menuTextCon, `inherit`, `${hun/2}vh`);
setDisplay(menuTextCon, 'flex', 'flex-end', 'space-around', 'column');
borderBk(menuTextCon);

// todo: 프로젝트명은 data-wave가 없는 곳에 들어감
const menuTextItem = Array.from(menuTextCon.children);
// console.log(menuTextItem);
menuTextItem.forEach((elem, index) => {
  // console.log(elem);
  elem.style.fontSize = `0.8rem`;

  elem.style.textAlign = 'end';
  elem.style.listStyleType = 'none';
  // todo: text 넣어주기
  let dataValue = index / 2;
  if (index % 2 === 0) {
    elem.textContent = projNameArr[dataValue];
    elem.setAttribute('data-wave', 0);
    console.log(elem);
  } else {
    elem.setAttribute('data-wave', Math.round(dataValue)); // 홀수인 경우 나머지 값이 아니다 보니 dataValue가 소수점으로 결과값이 나와서 0.5이상이면 보다 높은 정수값으로 반올림이 되므로 Math.round()를 사용해서 data-wave 값을 줬다
    setSize(elem, 'width', 'height');
    elem.style.borderTop = `1px solid ${colorObj.colorFf}`;
  }

});
console.log(menuTextItem);

// todo: 마우스 오버하면 선이 늘어나도록 구성,
// todo: 1. mouse over event

const menuText = Array.from(menuTextCon.children);
console.log(menuText); //0-7까지
// innerHTML에 프로젝트명이 들어가 있다 => 짝수번 마다
menuText.forEach((elem, index) => {
  index % 2 === 0 ? elem.style.letterSpacing = `0.5rem` : elem.style.width = `${hun*elem.dataset.wave}px`;
  // todo: 순서대로 잘 늘어났다, 그러나 정렬이 틀어졌고 텍스트 정렬도 갑자기 세로 정렬이 되버렸다
  
})
// ? 왜 세로로 나오는 건지 잘 모르겠음

// ? 한꺼번에 늘어나서 세부적인 조정이 필요하다
// ? data-set을 이용해서 타겟만 효과 주기
// ? borderTop이 없어지는 부분 왜 없어지는 것인지 해결하기
// ? 없어지는 부분도 부분이지만 문제는 크기도 제어가 안 된다는 점... 각각 다르게 적용할 수 있는 방법을 찾아야 할 것 
// ? 왜 언디파인드가 나오는가
// console.log(elem);
// elem.addEventListener('mouseover', (event) => {
//   console.log(elem);
// *0인 부분 => text 부분
// todo: text는 사이에 간격이 늘어나야 한다
//   if (event.target.dataset.wave === 0) {
//     console.log(event.target.dataset.wave);
//     console.log(elem.dataset.wave);
//     console.log(elem.style.width);
//     event.target.style.letterSpacing = `1rem`;
//     event.target.style.transition = '1s';

// todo: dataset이 0이 아닌 다른 값들 => 선이 늘어나는 부분
// *1, 2, 3, 4 => 순서대로 borderTop을 갖고 있는 박스 부분 
// ?다 dataset 값이 무엇인지는 잘 나온다
//   } else {
//     console.log(event.target);
//     setSize(event.target, `${window.innerWidth/4}px`);
//   }
// });