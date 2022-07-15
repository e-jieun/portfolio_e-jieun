import {
  setDisplay,
  setSize,
  setPosition,
} from "./module/css-function.js";
import makePage from "./module/makepage.js";
import makeElem from "./module/makeelem.js"
import hun from "./module/reset.js";
import colorObj from "./module/color.js";

const root = document.getElementById('root');
// *03-menu-overview page 만들어 줄 부분
makePage(root, 'section', 'menu-overview');
// console.log(root.lastElementChild);

// *#menu-overview
const overviewPage = document.getElementById('menu-overview');
// console.log(overviewPage);
setSize(overviewPage, `${hun}vw`, `${hun}vh`);
// borderBk(overviewPage);
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
  // borderBk(elem);
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
// borderBk(projText);
// console.dir(projText);

// *bigTxtCon
const bigTxtCon = overviewPage.firstElementChild;
console.log(bigTxtCon);


// *bigTxt
bigTxtCon.innerHTML = makeElem('div', '', 'PROJECT');
const bigTxt = bigTxtCon.firstElementChild;
console.log(bigTxt);
bigTxt.setAttribute('style', `transform: rotate(${-hun/10*9}deg); font-size: 15vw; font-weight: ${hun*8}; font-family: CWDangamAsac-Bold;`);
setPosition(bigTxt, 'relative', window.innerHeight / 2 + 'px');
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
const projNameArr = ['프로젝트 보라도라', '프로젝트 다닥', `The Volunteers 랜딩 페이지`, '개인 프로젝트'];

// *li*8 추가
let a = '';
for (let i = 0; i < 8; i++) {
  a += makeElem('a');
}
// console.log(li);
menuTextCon.innerHTML = a;
// console.log(menuTextCon);

// *li rowGap
setSize(menuTextCon, `inherit`, `${hun/4}vmax`);
setDisplay(menuTextCon, 'flex', 'flex-end', 'space-around', 'column');
// borderBk(menuTextCon);

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
    elem.setAttribute('data-wave', Math.round(dataValue) + 1);
    console.log(elem);
  } else {
    elem.setAttribute('data-wave', Math.round(dataValue)); // 홀수인 경우 나머지 값이 아니다 보니 dataValue가 소수점으로 결과값이 나와서 0.5이상이면 보다 높은 정수값으로 반올림이 되므로 Math.round()를 사용해서 data-wave 값을 줬다
    setSize(elem, 'width', 'height');
    elem.style.borderTop = `1px solid ${colorObj.colorFf}`;
  }

});
console.log(menuTextItem);

// todo: 1. mouse over event
// todo: 마우스 오버하면 선이 늘어나도록 구성,

const menuText = Array.from(menuTextCon.children);
console.log(menuText); //0-7까지
// innerHTML에 프로젝트명이 들어가 있다 => 짝수번 마다
menuText.forEach((elem, index) => {
  console.log(elem);
  // index % 2 === 0 ? elem.style.letterSpacing = `0.5rem` : elem.style.width = `${hun*elem.dataset.wave}px`;
  // todo: 순서대로 잘 늘어났다, 그러나 정렬이 틀어졌고 텍스트 정렬도 갑자기 세로 정렬이 되버렸다
  // todo: 마우스오버 이벤트를 만들어서 마우스오버 이벤트에서 이벤트 타겟의 데이터 값이 0이면 => 텍스트
  // todo: 마우스 오버 이벤트에서 이벤트 타겟의 값이 0보다 크면, 다른 수일 때
  elem.style.letterSpacing = '0';
  elem.style.width = `${150*elem.dataset.wave}px`;
  elem.style.transition = '1s';
  // *overview menu
  if(index%2 === 0){
    elem.href = `#num-${index/2+1}`;
    elem.classList.add('url-color');
  }
  menuTextCon.addEventListener('click', (event) => {
    console.log(elem.href);
  })
  menuTextCon.addEventListener('mouseover', (event) => {
    console.clear();
    let isStatus = true;
    if (event.target.dataset.wave === elem.dataset.wave) {
      console.log('this is text');
      elem.style.letterSpacing = `10px`;
      elem.style.width = `${window.innerWidth/2}px`;
      elem.style.transition = '1s';
    }
  });
  menuTextCon.addEventListener('mouseout', (event) => {
    console.clear();
    console.log(event.target);
    let isStatus = true;
    if (event.target.dataset.wave === elem.dataset.wave) {
      console.log('this is text');
      elem.style.letterSpacing = '0';
      elem.style.width = `${150*elem.dataset.wave}px`;
      elem.style.transition = '1s';
    }
  })
console.log(elem.dataset.wave);  

});