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

const projPageModuleTwo = (page) => {
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
  const titleTextArr = ['프로젝트 다닥', `프로젝트 다닥은 온라인 기반의 문구류를 직접 체험해보고 적용해본 후 구매 정보를 제공하는 온라인 문구류 체험 플랫폼 서비스입니다`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget commodo, augue dis habitant viverra odio amet. Nec, amet, nisi hendrerit pellentesque nisl neque etiam laoreet morbi. Diam tempus placerat consectetur et. Ultrices vel ultrices condimentum sed nisi, blandit. Sed nunc fringilla senectus nunc sed. 

  Consectetur ultricies lorem posuere ullamcorper morbi nulla. Tellus nunc felis tortor dolor elementum mauris morbi. Auctor amet ut nullam dolor nunc. Faucibus dictum cras a nunc, vel, non sed elementum. Enim neque pharetra, pellentesque id ultrices convallis urna diam, urna. Mattis lectus fringilla ut semper nam dignissim in. Facilisis cras mauris in vitae eu mi ultrices aenean cursus. Ac nunc ut ut turpis.`];
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
  projThumnail.src = './img/가상 문구류 포트폴리오 썸네일 이미지.jpg'
  setSize(projThumnail, `${hun/2}vw`, 'inherit');
  // *contents>div
  makePage(projContents, 'div');
  const projExplainText = projContents.lastElementChild;
  // console.log(projExplainText);
  projExplainText.textContent = `${titleTextArr[2]}`;
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

export default projPageModuleTwo;