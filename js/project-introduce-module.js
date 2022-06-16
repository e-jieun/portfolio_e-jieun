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

const projPageModule = (page) => {
  console.log('hi');

  // *title, contents, link
  // 반복문으로 만들어서 돌려주면 문자열에 넣어줄 부분
  let projSectionArr = ['title', 'contents', 'link'];
  let makeSection = '';
  projSectionArr.forEach((elem, index) => {
    makeSection += `${makeElem('div',`${projSectionArr[index]}`)}`;
  })
  console.log(makeSection);
  page.innerHTML = `${makeSection}`;
  console.log(page);

  // *title
  const projTitle = page.firstElementChild;
  console.log(projTitle);

  // *title>div*2
  const titleTextArr = ['Lorem, ipsum dolor.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, atque.'];
  projTitle.innerHTML = `${makeElem('div', '', `${titleTextArr[0]}`)}${makeElem('div', '', `${titleTextArr[1]}`)}`;
  setSize(projTitle, `${hun}vw`);
  setDisplay(projTitle, 'flex', '', 'space-between');

  // *contents
  const projContents = page.firstElementChild.nextElementSibling;
  console.log(projContents);
  setDisplay(projContents, 'flex');

  // *contents>img
  makePage(projContents, 'img');
  console.log(projContents.children);
  const projThumnail = projContents.firstElementChild;
  projThumnail.src = './img/보라도라 포트폴리오 썸네일 이미지.jpg'
  setSize(projThumnail, `${hun/2}vw`, 'inherit');
  // *contents>div
  makePage(projContents, 'div');
  const projExplainText = projContents.lastElementChild;
  console.log(projExplainText);
  projExplainText.textContent = `${titleTextArr[1]}`;



  // *link
  const projLink = page.lastElementChild;
  console.log(projLink);
  setDisplay(projLink, 'flex', '', 'space-between');

  // *link > div*2
  projLink.innerHTML = `${makeElem('div', 'link')}${makeElem('div', 'page-number')}`;
  console.log(projLink.children);

  // *link > div[0] > a*2
  const anchorCon = projLink.firstElementChild;
  const aName = ['Process', 'Github'];
  const hrefArr = ['', ''];
  let makeAnchor = '';
  hrefArr.forEach((elem, index) => {
    makeAnchor += `${makeElem('a', '', `${aName[index]}`)}`;
  })
  console.log(makeAnchor);
  anchorCon.innerHTML = makeAnchor;

  // *link > div[1] => #page-number
  const pageNumCon = projLink.lastElementChild;
  console.log(pageNumCon);
  // pageNumCon.innerHTML = 
  let pageNumItemArr = [1, 2, 3, 4];
  let makeNumItem = '';
  pageNumItemArr.forEach((elem, index) => {
    makeNumItem += `${makeElem('li', '', `${pageNumItemArr[index]}`)}`;
  })
  console.log(makeNumItem);
  pageNumCon.innerHTML = makeNumItem;

};

export default projPageModule;