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

const projPageModuleFour = (page) => {
  // console.log('hi');

  setDisplay(page, 'flex', 'center', 'space-around', 'column');
  // *title, contents, link
  // 반복문으로 만들어서 돌려주면 문자열에 넣어줄 부분
  let projSectionArr = ['title', 'contents', 'link'];
  let makeSection = '';
  projSectionArr.forEach((elem, index) => {
    makeSection += `${makeElem('div',`${projSectionArr[index]}`)}`;
  })
  // console.log(makeSection);
  page.innerHTML = `${makeSection}`;
  // console.log(page);

  // *page.children
  const pageCon = Array.from(page.children);
  console.log(pageCon);
  pageCon.map(elem => {
    elem.style.width = `${hun/10*9}vw`;
  });

  // *title
  const projTitle = page.firstElementChild;
  // console.log(projTitle);

  // *title>div*2
  const titleTextArr = ['프로젝트 보라도라', `프로젝트 보라도라는 일본 드라마 감상으로 일본어를 학습할 수 있는 드라마 스트리밍 서비스 입니다`];
  projTitle.innerHTML = `${makeElem('div', '', `${titleTextArr[0]}`)}${makeElem('div', '', `${titleTextArr[1]}`)}`;
  setDisplay(projTitle, 'flex', '', 'space-between');

  // *title>div:nth-child(1)
  const projTitleTextOne = projTitle.firstElementChild;
  console.log(projTitleTextOne);
  projTitleTextOne.style.fontSize = '1.5rem';

  // *contents
  const projContents = page.firstElementChild.nextElementSibling;
  // console.log(projContents);
  setDisplay(projContents, 'flex', 'center', 'space-between');

  // *contents>img
  makePage(projContents, 'img');
  // console.log(projContents.children);
  const projThumnail = projContents.firstElementChild;
  projThumnail.src = './img/보라도라 포트폴리오 썸네일 이미지.jpg'
  setSize(projThumnail, `${hun/2}vw`, 'inherit');
  // *contents>div
  makePage(projContents, 'div');
  const projExplainText = projContents.lastElementChild;
  // console.log(projExplainText);
  projExplainText.textContent = `${titleTextArr[1]}`;
  setSize(projExplainText, '30vw');

  // *link
  const projLink = page.lastElementChild;
  // console.log(projLink);
  setDisplay(projLink, 'flex', '', 'space-between');

  // *link > div*2
  projLink.innerHTML = `${makeElem('div', 'link')}${makeElem('div', 'page-number')}`;
  // console.log(projLink.children);

  // *link > div[0] > a*2
  const anchorCon = projLink.firstElementChild;
  setSize(anchorCon, `${hun/5}vw`);
  setDisplay(anchorCon, 'flex', '', 'space-around');
  const aName = ['Process', 'Github'];
  const hrefArr = ['', ''];
  let makeAnchor = '';
  hrefArr.forEach((elem, index) => {
    makeAnchor += `${makeElem('a', '', `${aName[index]}`)}`;
  })
  // console.log(makeAnchor);
  anchorCon.innerHTML = makeAnchor;

  // *link > div[1] => #page-number
  const pageNumCon = projLink.lastElementChild;
  // console.log(pageNumCon);
  // pageNumCon.innerHTML = 
  let pageNumItemArr = [1, 2, 3, 4];
  let makeNumItem = '';
  pageNumItemArr.forEach((elem, index) => {
    makeNumItem += `${makeElem('a', ``, `${pageNumItemArr[index]}`)}`;
  })
  // console.log(makeNumItem);
  pageNumCon.innerHTML = makeNumItem;

  const pageNum = Array.from(pageNumCon.children);
  console.log(pageNum);
  pageNum.forEach((elem, index) => {
    elem.href = `num-${index+1}`;
    console.log(elem);
  })
};

export default projPageModuleFour;