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
endingPage.style.padding = `${hun/5}px`;

// *#ending-page > div*3
const endingSection = {
  sectionOne: 'ending-title',
  sectionTwo: 'ending-inform',
  sectionThree: 'ending-msg'
}


// *#ending-title
makePage(endingPage, 'div', `${endingSection.sectionOne}`);
const endingTitle = endingPage.firstElementChild;
console.log(endingTitle);
setDisplay(endingPage, 'grid');
endingPage.style.gridTemplateRows = '1fr 4fr 1fr';

// *#ending-title > div*2
let makeTitleItem = '';
for(let i = 0; i < 2; i++){
  makeTitleItem += `${makeElem('div')}`;
}
endingTitle.innerHTML = makeTitleItem;
console.log(endingTitle.children);
setDisplay(endingTitle, 'flex', '', 'space-between');

// *div[0]
const endingTitleText = endingTitle.firstElementChild;
console.log(endingTitleText);
endingTitleText.textContent = 'Web Designer E-JIEUN';

// *div[1] > div#top-btn+img#shakahand
const topBtn = endingTitle.lastElementChild;
console.log(topBtn);
topBtn.innerHTML = `${makeElem('div', 'top-btn', 'Surfing Again')}${makeElem('img', 'shakahand')}`;
console.log(topBtn);

// *#top-btn
const topBtnItem = document.getElementById('top-btn');
console.log(topBtnItem);

// *#shakahand
const topShakahand = document.getElementById('shakahand');
console.log(topShakahand);
topShakahand.src = './img/svg/shakahand.svg';
setSize(topShakahand, `${hun/10*8}px`, `${hun/10*8}px`);

// *#ending-inform
makePage(endingPage, 'div', `${endingSection.sectionTwo}`);
const endingInform = endingTitle.nextElementSibling;
console.log(endingInform);

// *#ending-inform > ul*3
let makeUl = '';
for(let i = 0; i < 3; i++){
  makeUl += `${makeElem('ul')}`;
}
endingInform.innerHTML = makeUl;
console.log(endingInform);

const informCon = endingInform.children;
const informConArr = Array.from(endingInform.children);
console.log(informCon);
// *ul > li
// *#ul[0] > li+a href=notion
// *#ul[1] > li+a href=github
const addli = informConArr.map(elem => elem.innerHTML = `${makeElem('li')}${makeElem('a')}`);

// todo: textContent informConArr > li
const informTitleArr = {
  titleOne: 'Personal Page',
  titleTwo: 'My Github Page',
  titleThree: 'If You Wanna Contact Me'
}
const anchorHrefArr = {
  hrefOne: 'https://www.notion.so/Shaka-265effdb10cb4a47a248cbf8bfc18445',
  hrefTwo: 'https://github.com/e-jieun'
}
informConArr.forEach((elem, index) => {
  if(index === 0){
    elem.firstElementChild.textContent = informTitleArr.titleOne;
    elem.lastElementChild.href = anchorHrefArr.hrefOne;
    elem.lastElementChild.textContent = anchorHrefArr.hrefOne;
  } else if(index === 1){
    elem.firstElementChild.textContent = informTitleArr.titleTwo;
    elem.lastElementChild.href = anchorHrefArr.hrefTwo;
    elem.lastElementChild.textContent = anchorHrefArr.hrefTwo;
  } else{
    elem.firstElementChild.textContent = informTitleArr.titleThree;
  }
})

// todo: .map()으로 공통 적용된 a태그를 지우고 마지막 요소로 img 추가해주기
// *#ul[2] > li+img => email
const contact = informConArr.at(-1);
const removeA = contact.lastElementChild;
const makeImg = document.createElement('img');
console.log(removeA);
const contactItem = contact.replaceChild(makeImg, removeA);
console.log(contact);

// *#ending-msg
makePage(endingPage, 'div', `${endingSection.sectionThree}`);
const endingMsg = endingPage.lastElementChild;
console.log(endingMsg);

// *#ending-msg > div
makePage(endingMsg, 'div');
const endingMsgItem = endingMsg.firstElementChild;
endingMsgItem.innerHTML= '지금까지 이지은을<br>서핑해주셔서 감사합니다.';
setDisplay(endingMsg, 'flex', '', 'flex-end');

// *#ending-page.children
const endingChildArr = Array.from(endingPage.children);
// console.log(endingPage.children);
console.log(endingChildArr);
endingChildArr.forEach(elem => {
  elem.style.width = `${hun}vw`;
});