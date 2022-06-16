import {
  setDisplay,
  setSize
} from "./module/css-function.js";
import makePage from "./module/makepage.js";
import makeElem from "./module/makeelem.js"
import hun from "./module/reset.js";

// *02-introduce-myself page 만들어 줄 부분
const root = document.getElementById('root');
makePage(root, 'section', 'introduce-myself');
// console.log(root.children);

// *myselfPage
const myselfPage = document.getElementById('introduce-myself');
// console.log(myselfPage);

setSize(myselfPage, `${hun}vw`, `${hun*2}vh`);
myselfPage.classList.add('border-bk');
setDisplay(myselfPage, 'grid');
myselfPage.style.gridTemplateRows = '1fr 3fr 3fr 3fr';
// gridTemplateRows = '1fr 3fr 3fr 3fr';

// todo: 총 4개의 섹셔닝을 해줘야 함
// id값 배열
const myselfChildArr = ['top-menu', 'myself-font', 'font-explain', 'qna'];
myselfChildArr.forEach((elem, index) => {
  makePage(myselfPage, 'div', myselfChildArr[index]);
});

// *레이아웃 구분을 위해 섹션별 보더값을 적용, section 넓이값 적용
const section = Array.from(myselfPage.children);
console.log(section);

section.forEach(elem => {
  elem.classList.add('border-bk');
  elem.style.width = `${hun}vw`;
})

// console.log(myselfPage.children); //4개의 div 태그가 자식요소로 잘 생성이 됨

// *topMenu
const topMenu = myselfPage.firstElementChild;
setDisplay(topMenu, 'flex', 'center', 'flex-end');

// *topMenu > ul+ul
topMenu.innerHTML = `${makeElem('ul')}${makeElem('ul')}`;
// console.log(topMenu.children);
const topMenuUl = Array.from(topMenu.children);
// console.log(topMenuUl);

const topMenuTextArr = ['Personal Page', 'Github'];
// *topMenu > ul 각각 > li*2
topMenuUl.forEach((elem, index) => {
  // console.log(elem);
  elem.innerHTML = `${makeElem('li')}${makeElem('li')}`;
  // console.log(elem);
  // elem.style.listStyleType = 'none';
  if (index === 0) {
    elem.firstElementChild.textContent = topMenuTextArr[index];
  } else {
    elem.firstElementChild.textContent = topMenuTextArr[index];
  }
});

// *myselfFont
const myselfFont = document.getElementById('myself-font');
// console.log(myselfFont);

// *myselfFont > h1
makePage(myselfFont, 'h1');
// console.log(myselfFont);
const myselfFontH1 = myselfFont.firstElementChild;
console.log(myselfFontH1);
myselfFontH1.innerHTML = `<div>안녕하세요</div>
<div>더 나은 서비스 흐름을 만들기 위해
<span>새로운 시도</span>를 멈추지 않는</div>
<div>웹 디자이너 <span>이지은</span>입니다</div>`;


// todo: span을 제외한 부분에 classList .stroke font 적용 혹은 반대로
// console.log(myselfFontH1.childNodes);
// const h1ChildNodes = Array.from(myselfFontH1.childNodes);
// console.dir(h1ChildNodes);
// h1ChildNodes.forEach(elem => {elem.nodeName.toLowerCase === 'span'? console.log(elem): console.log('not span')});  // 다 not span이 뜬다
// h1ChildNodes.forEach(elem => {
//   // elem.classList.add('stroke-font');
//   if(elem.childNodes.nodeName === 'SPAN'){
//     console.log('hi');
//     // elem.classList.remove('stroke-font');
//   }
// })
// https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_text
// todo: 그런데 이 부분을 사용하려면 캔버스 엘리먼트로 바꿔줘야하고 strokeText와 특정 부분의 글씨는 fillText로 나눠 적용해야한다
// todo: 좌표를 사용해서 글씨를 그려주는 원리인 것 같음

// *fontExplain
// *div > div*2
const fontExplain = document.getElementById('font-explain');
console.log(fontExplain);
fontExplain.innerHTML = `${makeElem('div', 'explain-box', `${makeElem('div', '', 'Lorem, ipsum dolor.')}${makeElem('div', '', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nulla fugit sequi, ut placeat vitae?
Quasi perferendis recusandae facilis eaque vero omnis eum, iusto architecto voluptates. Ex sint aperiam sed.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla aspernatur facilis ratione a culpa dolorem
blanditiis quas nisi quia quae. Porro maxime amet tenetur dolorum saepe delectus voluptatum nulla rerum.`)}`)}`;


// *qna
const qna = myselfPage.lastElementChild;
console.log(qna);

const qnaDataArr = [1, 2, 3];
const qTextArr = ['1.', '2.', '3.'];
const aTextArr = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatem.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatem.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatem.'];


// todo: 3개 만들어주기 (ul > li*2)*3
qnaDataArr.forEach(elem => {
  makePage(qna, 'ul');
});
// todo: ul을 그리드로 높이값을 정해주기
setDisplay(qna, 'grid');
qna.style.gridTemplateRows = '2fr 2fr 2fr';


// makePage();
// todo: ul data-qna = qnaDataArr[index];
const qnaCon = Array.from(qna.children);
console.log(qnaCon);
qnaCon.forEach((elem, index) => {
  elem.setAttribute('data-qna', qnaDataArr[index]);
  setSize(elem, `${hun}vw`, ``);
  elem.classList.add('border-bk');
  // todo: ul마다 각각 > div > li*2
  elem.innerHTML = `${makeElem('div', '', `${makeElem('li', '', `${qTextArr[index]}`)}${makeElem('li', '', `${aTextArr[index]}`)}`)}`;
  
  // todo: 계단식으로 구조를 변경해줄 부분
  if(index === 0){
    console.log(elem);
    setDisplay(elem, 'flex', 'center', 'flex-start');
  } else if(index === 1){
    console.log(elem);
    setDisplay(elem, 'flex', 'center', 'center');
  } else{
    console.log(elem);
    setDisplay(elem, 'flex', 'center', 'flex-end');
  }
  
  // *ul >div
  const textBox = elem.firstElementChild;
  // console.log(textBox);
  textBox.classList.add('border-bk');
  setSize(textBox, `${elem.offsetWidth/3}px`, '');
  
  // *ul > div > li*2(li태그)
  const textItems = Array.from(textBox.children);
  console.log(textItems);
  textItems.forEach(elem => {elem.style.listStyleType = `none`;});


});
// console.log(qna);




