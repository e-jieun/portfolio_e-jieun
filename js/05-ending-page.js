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
import colorObj from "./module/color.js";

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
endingPage.style.color = `${colorObj.colorFf}`;

// *#ending-page > div*3
const endingSection = {
  sectionOne: 'ending-title',
  sectionTwo: 'ending-inform',
  sectionThree: 'ending-msg'
}


// *#ending-title
makePage(endingPage, 'div', `${endingSection.sectionOne}`);
const endingTitle = endingPage.firstElementChild;
// console.log(endingTitle);
setDisplay(endingPage, 'grid');
endingPage.style.gridTemplateRows = '1fr 4fr 1fr';

// *#ending-title > div*2
let makeTitleItem = '';
for (let i = 0; i < 2; i++) {
  makeTitleItem += `${makeElem('div')}`;
}
endingTitle.innerHTML = makeTitleItem;
// console.log(endingTitle.children);
setDisplay(endingTitle, 'flex', '', 'space-between');

// *div[0]
const endingTitleText = endingTitle.firstElementChild;
// console.log(endingTitleText);
endingTitleText.textContent = 'Web Designer E-JIEUN';
endingTitleText.setAttribute('style',`font-size: 5vw; color: ${colorObj.colorSb}`);
endingTitleText.style.fontSize = `5vw`;

// *div[1] > div#top-btn+img#shakahand
const topBtn = endingTitle.lastElementChild;
// console.log(topBtn);
setDisplay(topBtn, 'flex', 'center', 'space-around', 'column');
topBtn.innerHTML = `${makeElem('div', 'top-btn', 'Surfing Again')}${makeElem('img', 'shakahand')}`;
// console.log(topBtn);

// *#top-btn
const topBtnItem = document.getElementById('top-btn');
topBtnItem.setAttribute('style',`margin: ${hun/10}px;`);
// console.log(topBtnItem);

// *#shakahand
const topShakahand = document.getElementById('shakahand');
// console.log(topShakahand);
topShakahand.src = './img/svg/shakahand.svg';
setSize(topShakahand, `${hun/10*8}px`, `${hun/10*8}px`);

// *#shakahand -> topBtn
const shakehand = [
  {transform: `rotate(${hun/10}deg)`},
  {transform: `rotate(${-hun/10}deg)`}
]
const shaketiming = {
  duration: 2000,
  iterations: 2
}
topShakahand.addEventListener('mouseover', () => {

});
topShakahand.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// *#ending-inform
makePage(endingPage, 'div', `${endingSection.sectionTwo}`);
const endingInform = endingTitle.nextElementSibling;
// console.log(endingInform);

// *#ending-inform > ul*3
let makeUl = '';
for (let i = 0; i < 3; i++) {
  makeUl += `${makeElem('ul')}`;
}
endingInform.innerHTML = makeUl;
// console.log(endingInform);

const informCon = endingInform.children;
const informConArr = Array.from(endingInform.children);
// console.log(informCon);
// *ul > li
// *#ul[0] > li+a href=notion
// *#ul[1] > li+a href=github
const addli = informConArr.map(elem => elem.innerHTML = `${makeElem('li')}${makeElem('a')}`);

// todo: textContent informConArr > li
const informTitleObj = {
  titleOne: 'Personal Page',
  titleTwo: 'My Github Page',
  titleThree: 'If You Wanna Contact Me'
}
const anchorHrefArr = [
  'https://www.notion.so/Shaka-265effdb10cb4a47a248cbf8bfc18445',
  'https://github.com/e-jieun',
  'liz950827@gmail.com'
];

const informLink = Array.from(endingPage.querySelectorAll('a'));
informLink.forEach((elem, index) => {
  setPosition(elem, 'relative');
  setSize(elem, `${window.innerWidth/2}vw`);
  elem.style.borderTop = `1px solid ${colorObj.colorFf}`;
  elem.setAttribute('data-link', index+1);
  Number(elem.dataset.link) == index+1 ? elem.href = anchorHrefArr[index] : console.log('again');
  Number(elem.dataset.link) == index+1 ? elem.textContent = anchorHrefArr[index] : console.log('again');

});

informConArr.forEach((elem, index) => {
  elem.firstElementChild.style.fontSize = '3vw';
  elem.style.listStyleType = 'none';
  setPosition(elem, 'relative', '', '', '-10vh', '');
  setSize(elem, `${window.innerWidth/2}vw`);
  // *personal page
  if (index === 0) {
    elem.firstElementChild.textContent = informTitleObj.titleOne;
    // *my github page
  } else if (index === 1) {
    elem.firstElementChild.textContent = informTitleObj.titleTwo;
    // *if you wanna contact me
  } else {
    elem.firstElementChild.textContent = informTitleObj.titleThree;
    console.log(elem.lastElementChild);
  }
})

// *#ending-msg
makePage(endingPage, 'div', `${endingSection.sectionThree}`);
const endingMsg = endingPage.lastElementChild;
// console.log(endingMsg);

// *#ending-msg > div
makePage(endingMsg, 'div');
const endingMsgItem = endingMsg.firstElementChild;
endingMsgItem.textContent = 'Thank you for surfing me';
endingMsgItem.style.fontSize = `2vw`;
setDisplay(endingMsg, 'flex', '', 'flex-end');

// *#ending-page.children
const endingChildArr = Array.from(endingPage.children);
// console.log(endingPage.children);
// console.log(endingChildArr);
endingChildArr.forEach(elem => {
  elem.style.width = `${hun/10*9}vw`;
});

const contactCon = endingPage.children[1];
console.log(contactCon);