import {
  setDisplay,
  setSize,
  setPosition
} from "./module/css-function.js";
import makePage from "./module/makepage.js";
import makeElem from "./module/makeelem.js"
import hun from "./module/reset.js";
import colorObj from "./module/color.js";

// *02-introduce-myself page 만들어 줄 부분
const root = document.getElementById('root');
makePage(root, 'section', 'introduce-myself');
// console.log(root.children);

// *myselfPage
const myselfPage = document.getElementById('introduce-myself');
// console.log(myselfPage);


setSize(myselfPage, `${hun}vw`, `${hun*3}vh`);
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
// console.log(section);

section.forEach(elem => {
  elem.classList.add('border-bk');
  elem.style.width = `${hun}vw`;
})

// console.log(myselfPage.children); //4개의 div 태그가 자식요소로 잘 생성이 됨

// *topMenu
const topMenu = myselfPage.firstElementChild;
window.addEventListener('scroll', () => {
  setDisplay(topMenu, 'flex', 'center', 'flex-end');
  if (window.scrollY >= window.innerHeight) {
    setPosition(topMenu, 'fixed', 0);
    setSize(topMenu, '90vw');
    topMenu.style.color = colorObj.colorFf;
    topMenu.style.mixBlendMode = 'overlay';
  }
})
// *topMenu > ul+ul
topMenu.innerHTML = `${makeElem('ul')}${makeElem('ul')}`;
// console.log(topMenu.children);
const topMenuUl = Array.from(topMenu.children);
// console.log(topMenuUl);

const topMenuTextArr = ['Personal Page', 'Github'];
// *topMenu > ul 각각 > li*2
topMenuUl.forEach((elem, index) => {
  // console.log(elem);
  elem.style.color = `${colorObj.colorSb}`;
  elem.style.listStyleType = 'none';
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
setSize(myselfFontH1, '', '50vh');
myselfFontH1.style.alignItems = 'center';

// console.log(myselfFontH1);
myselfFontH1.innerHTML = `<div>안녕하세요</div>
<div>더 나은 서비스 흐름을 만들기 위해</div>
<div><span>새로운 시도</span>를 멈추지 않는</div>
<div>웹 디자이너 <span>이지은</span>입니다</div>`;

// todo: span을 제외한 부분에 classList .stroke font 적용 혹은 반대로
const strokeText = Array.from(myselfFontH1.children);
console.log(strokeText);
strokeText.map((elem, index) => {
  elem.classList.add('stroke-font');
  elem.setAttribute('style', `font-size: 7vw; font-weight: 200; font-family: 'CWDangamAsac-Bold';
  `);
  // alert(elem);
  index === 0 || index === 2 ? elem.style.fontSize = '5vw' : '';
});

const fillText = document.querySelectorAll('span');
const fillTextArr = Array.from(fillText);
console.log(fillText);
console.log(fillTextArr);
fillTextArr.map(elem => {
  elem.classList.add('fill-font');
});


// todo: https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_text
// todo: 그런데 이 부분을 사용하려면 캔버스 엘리먼트로 바꿔줘야하고 strokeText와 특정 부분의 글씨는 fillText로 나눠 적용해야한다
// todo: 좌표를 사용해서 글씨를 그려주는 원리인 것 같음

// *fontExplain
// *div > div*2
const fontExplainTextObj = {
  textOne: '왜 새로운 시도를 즐기는 사람인가요?',
  textTwo: `새로운 것을 보면 늘 호기심을 가집니다.<br>
  새로운 도전은 조금의 두려움은 있지만 저에게 기분좋은 설레임을 안겨줍니다.<br>
  능숙하지 않더라도 스스로 도전하고 저만의 결과물을 만들어 내는 것에 목표를 두고 작업합니다.<br>
  제게 도전이란 스스로를 능동적으로 발전할 수 있도록 만들어 주는 원동력과 같습니다.<br>
  지금은 사용자를 생각하는 더 나은 서비스를 만들기 위해 매 작업마다 도전하고 있습니다.`
}
const fontExplain = document.getElementById('font-explain');
// console.log(fontExplain);
fontExplain.innerHTML = `${makeElem('div', 'explain-box', `${makeElem('div', '', `${fontExplainTextObj.textOne}`)}<br>${makeElem('div', '', `${fontExplainTextObj.textTwo}`)}`)}`;
fontExplain.style.color = `${colorObj.colorFf}`;
setDisplay(fontExplain, `flex`, ``, `flex-end`);
// console.dir();
setPosition(fontExplain, `relative`, ``, ``, ``, ``);

const explainTxtCon = fontExplain.firstElementChild;
console.log(explainTxtCon);
setDisplay(explainTxtCon, `flex`, `flex-start`, `flex-end`, `column`);
setSize(explainTxtCon, `${hun/3}vw`, `100%`);
explainTxtCon.lastElementChild.style.fontWeight = 300;
console.log(explainTxtCon.lastElementChild);

// *qna
const qna = myselfPage.lastElementChild;
// console.log(qna);

const qnaDataArr = [1, 2, 3];
const qTextArr = ['제가 생각하는 디자인은 이렇습니다', '일하는 것에 있어 중요하게 생각하는 부분', '개인적으로 흥미를 가지고 있는 부분'];
const aTextArr = [`디자인은 서핑과 같다고 생각합니다.<br>서퍼는 매번 다른 파도를 경험하게 됩니다.<br>디자이너에게 사용자란 새롭게 밀려오는 파도와 같다고 생각해요.<br>그래서 서퍼처럼 디자이너는 새로운 파도에도 당황하지 않고 흐름을 읽고<br>해결방안을 도출해내는 과정을 즐겨야 한다고 생각합니다.<br>마치 어떤 파도든 즐기려고 하는 서퍼처럼 유연하게 사용자를 예측하고 분석해<br>알맞는 디자인을 찾아내는 과정과 비슷하다고 생각했어요.`, `다른 사람의 의견을 존중하는 일이<br>협업을 할 때 가장 중요한 부분이라고 생각합니다.<br>다른 사람을 존중할 줄 알아야<br>제 자신도 타인에게 존중받으며 소통할 수 있다고 생각해요.<br>또한 그 시작은 시간과 계획을 잘 지키는 배려로부터 시작된다고 믿습니다.`, `개인적으로 영화, 음악, 사진과 같은 문화 콘텐츠를 감상하고<br>작업과 접목할 때 참고하는 것을 흥미롭게 생각합니다.<br>다른 사람의 창작물을 보며 어떤 생각을 바탕으로 작업을 했을까에 대해 예측하고 분석하는 걸 즐거워합니다.<br>영화를 감상할 때도 의도를 추리하고 파악하는 것을 좋아해 감독의 의도를 찾아보는 편이에요.<br>또한 새로운 서비스를 사용해보는 걸 좋아해서 새로운 앱 서비스를 자주 사용해봅니다.`];


// todo: 3개 만들어주기 (ul > li*2)*3
qnaDataArr.forEach(elem => {
  makePage(qna, 'ul');

});
// todo: ul을 그리드로 높이값을 정해주기
setDisplay(qna, 'grid');
qna.style.gridTemplateRows = '1fr 1fr 1fr';


// makePage();
// todo: ul data-qna = qnaDataArr[index];
const qnaCon = Array.from(qna.children);
// console.log(qnaCon);
qnaCon.forEach((elem, index) => {
  elem.setAttribute('data-qna', qnaDataArr[index]);
  // *글씨 담겨져있는 부분
  setSize(elem, `${hun/10*9}vmax`, ``);
  elem.classList.add('border-bk');
  // todo: ul마다 각각 > div > li*2
  elem.innerHTML = `${makeElem('div', '', `${makeElem('li', '', `${qTextArr[index]}`)}<br>${makeElem('li', '', `${aTextArr[index]}`)}`)}`;
  elem.lastElementChild.style.fontWeight = 300;
  elem.lastElementChild.firstElementChild.style.fontSize = '2vw';
  // todo: 계단식으로 구조를 변경해줄 부분
  if (index === 0) {
    // console.log(elem);
    setDisplay(elem, 'flex', 'center', 'flex-start');
  } else if (index === 1) {
    // console.log(elem);
    setDisplay(elem, 'flex', 'center', 'center');
  } else {
    // console.log(elem);
    setDisplay(elem, 'flex', 'center', 'flex-end');
  }

  // *ul >div
  const textBox = elem.firstElementChild;
  // console.log(textBox);
  textBox.classList.add('border-bk');
  setSize(textBox, `${elem.offsetWidth/2}px`, `30vh`);

  // *ul > div > li*2(li태그)
  const textItems = Array.from(textBox.children);
  // console.log(textItems);
  textItems.forEach(elem => {
    elem.style.listStyleType = `none`;
  });
});

// *myselfPage.children
const myselfCon = Array.from(myselfPage.children);
console.log(myselfCon);
myselfCon.map(elem => {
  elem.style.width = `${hun/10*9}vw`;
  elem.style.color = `${colorObj.colorFf}`;
});