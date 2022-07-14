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

const projPageModuleOne = (page) => {
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
  const titleTextArr = ['프로젝트 보라도라', `프로젝트 보라도라는 일본 드라마 감상으로 일본어를 학습할 수 있는 드라마 스트리밍 서비스 입니다`,
    `프로젝트 보라도라는 일본어를 학습하던 중 일본 드라마를 감상하며 학습을 위해 해외의 미디어 콘텐츠를 이용하는 OTT 서비스 사용자들의 Needs를 예측해 만들어졌습니다.
  <br>
  <br>
  보라도라는 보라라는 사용자 서비스 이용을 유도하는 한국어와 '도라'라고 하는 일본어로 드라마를 뜻하는 줄임말이 합쳐져 탄생한 프로젝트 네임입니다.
  <br>
  <br>
  평소 일본어 학습을 고민만하고 작심삼일만에 포기했다거나 학습을 위해 해외 드라마를 보기 위해 OTT 서비스에 접속했는데 결국 한국어 자막으로 처음부터 끝까지 시청해버렸던 사용자들을 위한 서비스입니다. 
  <br>
  <br>
  보라도라 서비스는 그런 사용자들을 위해 두 가지 자막을 동시에 제공합니다. 일본어를 다 몰라도 괜찮아요! 아래에 위치한 한국어로 동시에 감상하면 되니까요!
  <br>
  <br>
  입맛에 맞는 추천 작품을 잘 골라줘요. 직접 태그를 선택해 분위기, 장르도 골라보세요!
  <br>
  <br>
  북마크 해두고 두고두고 곱씹어 먹어요. 나도 모르게 어휘 실력이 상승해있을 거에요.
  <br>
  <br>
  도저히 빠른 대사에 무슨 말인지 모르겠다면? 속도가 느려도 괜찮아요. 천천히 꾸준히 가면 원하던 실력에 도달해있을 거에요!`
  ];

  projTitle.innerHTML = `${makeElem('div', '', `${titleTextArr[0]}`)}${makeElem('div', '', `${titleTextArr[1]}`)}`;
  setDisplay(projTitle, 'flex', '', 'space-between');

  // *title>div:nth-child(1)
  const projTitleTextOne = projTitle.firstElementChild;
  console.log(projTitleTextOne);
  projTitleTextOne.style.fontSize = '4vw';

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
  projExplainText.innerHTML = `${titleTextArr[2]}`;
  setSize(projExplainText, '30vw');

  // *link
  const projLink = page.lastElementChild;
  // console.log(projLink);
  setDisplay(projLink, 'flex', '', 'space-between');

  // *link > div*2
  projLink.innerHTML = `${makeElem('div', 'link')}`;
  // console.log(projLink.children);

  // *link > div[0] > a*2
  const anchorCon = projLink.firstElementChild;
  setSize(anchorCon, `${hun/5}vw`);
  setDisplay(anchorCon, 'flex', '', 'space-around');
  const aName = ['Process', 'Github'];
  const hrefArr = ['https://www.notion.so/e-jieun/88d8205f36234397a7ee351a185bbc98', 'https://github.com/e-jieun/project-boradora.git'];
  let makeAnchor = '';
  hrefArr.forEach((elem, index) => {
    makeAnchor += `${makeElem('a', '', `${aName[index]}`)}`;

  })
  // console.log(makeAnchor);
  anchorCon.innerHTML = makeAnchor;

  const anchorItem = Array.from(anchorCon.children);
  console.log(anchorItem);
  anchorItem.map((elem, index) => {
    elem.href = hrefArr[index];
    elem.classList.add('url-color');
  })
};

export default projPageModuleOne;