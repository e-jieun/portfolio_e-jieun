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
bigTxtCon.innerHTML = makeElem('div', '', 'PROJECT');

const bigTxt = bigTxtCon.firstElementChild;
console.log(bigTxt);
bigTxt.style.transform = `rotate(-90deg)`;
bigTxt.style.fontSize = '15rem';
bigTxt.style.fontWeight = '800';
bigTxt.style.position = 'relative';
bigTxt.style.bottom = `-55vh`;
bigTxt.style.left = '-20vh';

// bigTxt.style.overflow = `hidden`;
bigTxt.classList.add('stroke-font');


// *menu con -> overviewPage.children[1];
const overviewMenuCon = overviewPage.lastElementChild;
// console.log(overviewMenuCon);

// *div -> small text<ul>, menu text con<ul>을 감싸줄 부분들
overviewMenuCon.innerHTML = `${makeElem('div', '', `${makeElem('ul', 'small-text', 'Project')}${makeElem('ul', 'menu-text')}`)}`;
// console.log(overviewMenuCon.children);

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
setDisplay(menuTextCon, 'grid', 'flex-end', 'flex-end');
borderBk(menuTextCon);

// todo: 프로젝트명은 data-wave가 없는 곳에 들어감
const menuTextItem = Array.from(menuTextCon.children);
// console.log(menuTextItem);
menuTextItem.forEach((elem, index) => {
  // console.log(elem);
  elem.style.textAlign = 'end';
  elem.style.listStyleType = 'none';
  // todo: text 넣어주기
  let dataValue = index / 2;
  if (index % 2 === 0) {
    elem.textContent = projNameArr[dataValue];
  } else {
    elem.setAttribute('data-wave', Math.round(dataValue)); // 홀수인 경우 나머지 값이 아니다 보니 dataValue가 소수점으로 결과값이 나와서 0.5이상이면 보다 높은 정수값으로 반올림이 되므로 Math.round()를 사용해서 data-wave 값을 줬다
    elem.style.borderTop = `1px solid ${colorObj.colorFf}`;
  }
});
