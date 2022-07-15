import {
  setDisplay,
  setSize,
} from "./module/css-function.js";
import makePage from "./module/makepage.js";
import makeElem from "./module/makeelem.js"
import hun from "./module/reset.js";

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
  const titleTextArr = ['프로젝트 다닥', `프로젝트 다닥은 온라인 기반의 문구류를 직접 체험해보고 적용해본 후 구매 정보를 제공하는 온라인 문구류 체험 플랫폼 서비스입니다`,
    `프로젝트 다닥은 온라인 기반의 디지털 문구류를 왜 체험하거나 실물을 보지 못하고 구매하게 되는 것일까에 대한 물음에서 시작됐습니다. 또한 코로나 유행으로 인해 오프라인 문구점에 방문해 이것저것 사용해보는 재미를 만끽할 수 없었죠.
  <br>
  <br>
  다닥은 오프라인의 문구류도 온라인의 디지털 문구류도 모두 온라인의 가상 노트로 체험을 하고 합리적인 소비로 연결해주는 체험형 쇼핑 플랫폼 서비스입니다.
  <br>
  <br>
  다닥은 한 브랜드의 소식을 최신으로 접할 수 있을 뿐만 아니라 판매하고 있는 웹사이트로 바로 접속할 수 있어요. 그것도 상품별로 말이죠. 그리고 접속하자마자 메인 화면을 가득 채우는 검색바는 사용자의 검색 접근성을 편리하게 만들어줬어요.
  <br>
  <br>
  실제 종이로 된 문구류를 쓰는 것처럼 다닥은 종이 질감을 가진 웹서비스에요. 사용자님이 사용하길 원하는 노트 종류도 선택이 가능하답니다. 또 기존에 사용하시던 노트가 있다면 스크린샷 혹은 직접 촬영을 해서 불러와 테스트 문구류 제품을 적용해보세요. 직접 사용해본자면 구매 만족도가 더욱 상승할 거에요.
  <br>
  <br>
  검색을 통해서만 접근이 가능한 건 아니에요. 메인 화면에서 하단으로 스크롤하면 프로젝트 다닥이 추천하는 서비스를 만나보실 수 있어요. 그동안 비슷한 서비스들에 광고가 지나치게 많았던 사용 환경을 사용자 피로도를 낮추는 방향으로 개선했어요.
  <br>
  <br>
  만족스러운 상품을 체험하고나서 바로 상품을 구매하러 갈 수 있도록 구성했어요. 이제 클릭 한 번으로 기존의 사용자가 사용하던 상품 구매 사이트 혹은 새로운 상품 구매 사이트로 이동할 수 있어요.`
  ];

  projTitle.innerHTML = `${makeElem('div', '', `${titleTextArr.at(0)}`)}${makeElem('div', '', `${titleTextArr.at(1)}`)}`;
  setDisplay(projTitle, 'flex', '', 'space-between');

  // *title>div:nth-child(1)
  const projTitleTextOne = projTitle.firstElementChild;
  console.log(projTitleTextOne);
  projTitleTextOne.style.fontSize = '3vw';

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
  const hrefArr = ['https://www.notion.so/e-jieun/c6a1218f6597443a97d7277a2664af07', 'https://github.com/e-jieun/project-virtual-moongoo'];
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

export default projPageModuleTwo;