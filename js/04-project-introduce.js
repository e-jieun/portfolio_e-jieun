import {
  setDisplay,
  setSize,
  setPosition,
} from "./module/css-function.js";
import makePage from "./module/makepage.js";
import makeElem from "./module/makeelem.js"
import hun from "./module/reset.js";
import makeCanvas from "./module/makecanvas.js";
import projPageModuleOne from "./04-1-projectone.js";
import projPageModuleTwo from "./04-2-projecttwo.js";
import projPageModuleThree from "./04-3-projectthree.js";
import projPageModuleFour from "./04-4-projectfour.js";
import colorObj from "./module/color.js";

// todo: 04-project-introduce page 만들어주기
const root = document.getElementById('root');
// *03-menu-overview page 만들어 줄 부분
// todo: 4개를 만들어 준다

makePage(root, 'section', 'project-container');

const projCon = document.getElementById('project-container');
console.log(projCon);

for (let i = 0; i < 4; i++) {
  let index = i + 1;
  makePage(projCon, 'article', `project-introduce${i}`);
}

// 똑같이 작성할 부분인데 페이지 스타일링만 따로 분리할 수 있지 않을까? 
// todo: 4개의 프로젝트 소개 페이지 만드는 부분
// *projPage
const projPage = document.getElementsByTagName('article');
console.log(projPage);
const projPageArr = Array.from(projPage);
projPageArr.forEach(elem => {
  setSize(elem, `${hun}vw`, `${hun}vh`);
  // borderBk(elem);
  setDisplay(elem, 'grid');
  elem.style.color = `${colorObj.colorFf}`;
  elem.style.gridTemplateRows = '1fr 1fr 1fr';
})

// *page별로 hash 적용을 위해 각각 id 값을 주어 적용
const pages = document.getElementsByTagName('article');
const pagesArr = Array.from(pages);
pagesArr.forEach((elem, index) => {
  elem.id = `num-${index+1}`;
  console.log(elem);
});


// *link nav
// ------------------------------------------------------------------
// *link
makePage(projCon, 'nav', 'project-link');

// *link > div[1] => #page-number
const pageNumCon = projCon.lastElementChild;
console.log(pageNumCon);
setDisplay(pageNumCon, 'grid');

// pageNumCon.innerHTML = 
let pageNumItemArr = ['01', '02', '03', '04'];
let makeNumItem = '';
pageNumItemArr.forEach((elem, index) => {
  makeNumItem += `${makeElem('a', ``, `${pageNumItemArr[index]}`)}`;
})
// console.log(makeNumItem);
pageNumCon.innerHTML = makeNumItem;

const pageNum = Array.from(pageNumCon.children);
console.log(pageNum);
pageNum.forEach((elem, index) => {
  elem.href = `#num-${index+1}`;
  elem.setAttribute('data-select', `${index+1}`);
  elem.style.fontSize = `2rem`;
  elem.classList.add('stroke-font');
  elem.style.fontWeight = `${hun*9}`;
  elem.style.textDecoration = 'none';
  // todo: 밑줄 없애주고, 클릭할 때마다 색도 변하지 않도록 해주기
  // todo: 클릭 이벤트 달아주고 선택된 페이지에 따라서 크기와 정렬 부분 제어하기
  console.log(elem);
})
// *3700px보다 pageY값이 낮으면 보이지 않도록 해줄 부분 => 프로젝트 페이지에서만 페이지 이동을 위해 필요한 부분이므로
window.addEventListener('wheel', (event) => {
  // console.log(event.pageY);
  // console.log(root.offsetHeight);
  if (event.pageY < 3700 || event.pageY > 7500) {
    setDisplay(pageNumCon, 'none');
  } else {
    setDisplay(pageNumCon, 'grid');
    setPosition(pageNumCon, 'fixed', '', '0', '', '0');
  }
})

// ------------------------------------------------------------------

// *hash로 페이지 이동하도록 해주는 부분
window.addEventListener('hashchange', function () {
  const urlTest = location.href;
  // console.log("href :" + urlTest);
  // console.log("hash :" + hashTest);
  // console.log("hash :" + hashTest.substring(1));
})


// *각각의 페이지를 연결해줬다
projPageModuleOne(pages[0]);
projPageModuleTwo(pages[1]);
projPageModuleThree(pages[2]);
projPageModuleFour(pages[3]);

// *img
const projImg = Array.from(projCon.getElementsByTagName('img'));
console.log(projImg);
projImg.map(elem => {
  elem.addEventListener('mouseover', function(){
    this.classList.toggle('img-change');
  })
  elem.addEventListener('mouseout', function(){
    this.classList.toggle('img-change');
  })
})