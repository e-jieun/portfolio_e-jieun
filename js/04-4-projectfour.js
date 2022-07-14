import {
  setDisplay,
  setSize,
  borderBk,
  setPosition,
  setBgColor
} from "./module/css-function.js";
import makePage from "./module/makepage.js";
import makeElem from "./module/makeelem.js"
import makeBubble from "./module/makebubble.js"
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
  class titleTextArr {
    constructor(title, explain) {
      this.title = title;
      this.explain = explain;
    }
  }
  const mainText = new titleTextArr('개인 프로젝트', '');
  const firstText = new titleTextArr('단짠 낫투두리스트', `혼자의 의지만으로 목표 달성이 어려울 때, 하지 말아야 할 것들로 내 투두리스트를 가득 채우면 어떨까요? 하지 말아야 할 것들만 지켜도 저절로 목표에 달성하게 되는 낫투두리스트. 낫투두리스트를 모두 달성하면 달콤한 칭찬으로, 달성하지 못하면 짜디짠 잔소리로 알림을 띄워줘요!`);
  const secondText = new titleTextArr('단무지 성격유형 테스트', `사람만큼이나 다양한 모양새를 가진 단무지! 단무지의 모양새가 사람마다 다른 성격유형과 닮아있다고 생각했어요. 성격유형이 어떤 단무지와 닮아있을지 궁금하다면 지금 테스트해보세요!`);
  const thirdText = new titleTextArr('공포영화 추천 서비스', `여름이면 냉면처럼 생각나는 공포영화, 매년 여름마다 공포영화가 보고싶을 때 취향에 맞는 공포영화를 찾기 어려워 만든 서비스입니다. 공포영화의 거장, 프랜차이즈 공포영화, 시리즈로 구성된 공포영화까지 간편하게 버튼을 클릭하면 추천 목록을 띄워줘요.`);
  const fourthText = new titleTextArr('편식 맛집 지도', '\'편식하면 키 안 커!\'라는 잔소리 한 번쯤 들어보지 않으셨나요? 극소수이긴 하지만 음식으로 인한 알러지를 ');




  console.log(firstText);
  // const titleTextArr = [`개인 프로젝트`, ``, `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.`];
  projTitle.innerHTML = `${makeElem('div', '', `${mainText.title}`)}${makeElem('div', '', `${mainText.explain}`)}`;
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
  projContents.innerHTML = makeBubble(4, 'div', ``);
  // makePage(projContents, 'img');
  // console.log(projContents.children);
  const projText = Array.from(projContents.children);
  projText.map((elem, index) => {
    setSize(elem, `${hun/5}vw`, 'inherit');
    elem.innerHTML = `${makeElem('div')}`;
    // ?왜 두번째에 텍스트가 안들어 갔을까?
    index === 0 ? elem.innerHTML = `${firstText.title}<br><br>${firstText.explain}` : index === 1 ? elem.innerHTML = `${secondText.title}<br><br>${secondText.explain}` : index === 2 ? elem.innerHTML = `${thirdText.title}<br><br>${thirdText.explain}` : index === 3 ? elem.innerHTML = `${fourthText.title}<br><br>${fourthText.explain}` : '';
  });



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
  const aName = 'Process';
  const hrefArr = 'https://www.notion.so/e-jieun/Toy-Project-d50600164c5f4e048e71a4a53697918f';
  let makeAnchor = `${makeElem('a', '', aName)}`;
  // console.log(makeAnchor);
  anchorCon.innerHTML = makeAnchor;

  const anchorItem = anchorCon.firstElementChild;
  console.log(anchorItem);
  anchorItem.href = hrefArr;
  anchorItem.classList.add('url-color');
};

export default projPageModuleFour;