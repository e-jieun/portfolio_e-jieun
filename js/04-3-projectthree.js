import {
  setDisplay,
  setSize,
} from "./module/css-function.js";
import makePage from "./module/makepage.js";
import makeElem from "./module/makeelem.js"
import hun from "./module/reset.js";

const projPageModuleThree = (page) => {
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
  const titleTextArr = ['The Volunteers 랜딩 페이지', `밴드 The Volunteers의 랜딩 페이지는 밴드 The Volunteers의 아이덴티티와 컨셉을 담아 소개하기 위한 랜딩 페이지 프로젝트입니다`, 
  `혹시 The Volunteers를 좋아하시나요?
  <br>
  <br>
  제가 좋아하는 밴드인 The Volunteers를 소개해드릴게요!
  <br>
  <br>
  The Volunteers의 아이덴티티를 담은 랜딩 페이지를 기획했습니다.
  <br>
  <br>
  그 중에서도 그들의 첫 앨범인 'The Volunteers'에 대해 소개해봤어요.
  <br>
  <br>
  The Volunteers는 그 시절 우리가 좋아한 브릿팝 밴드의 사운드, 히피스러움을 가득 담은 컨셉의 곡들로 채워진 앨범입니다. 90-00년대의 레트로하고 그런지한 분위기를 가득 담고 있는 비트와 뮤직비디오가 잘 어우러지도록 랜딩 페이지를 구성했어요.
  <br>
  <br>
  멤버 개개인의 사진을 Photoshop 브러쉬를 통해 테두리를 작업해 그런지하고 락 특유의 반항적인 분위기를 살렸고, VHS 영상 혹은 디지털 캠코더로 촬영된 뮤직비디오 영상과 어울리는 비디오 테이프를 첫 페이지로 구성했어요. 테이프가 재생되며 웹페이지가 시작된답니다.
  <br>
  <br>
  Let's Play!
  `];
  projTitle.innerHTML = `${makeElem('div', '', `${titleTextArr.at(0)}`)}${makeElem('div', '', `${titleTextArr.at(1)}`)}`;
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
  projThumnail.src = './img/더 발룬티어스 포트폴리오 썸네일 이미지.jpg'
  setSize(projThumnail, `${hun/2}vw`, 'inherit');
  // *contents>div
  makePage(projContents, 'div');
  const projExplainText = projContents.lastElementChild;
  // console.log(projExplainText);
  projExplainText.innerHTML = `${titleTextArr.at(-1)}`;
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
  const hrefArr = ['https://www.notion.so/e-jieun/The-Volunteers-7d9407e4e361426d8ea5f27fa787eb5b', 'https://github.com/e-jieun/project-thevolunteers.git'];
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

export default projPageModuleThree;