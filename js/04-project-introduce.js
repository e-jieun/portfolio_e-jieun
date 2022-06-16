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
import projPageModule from "./project-introduce-module.js";

// todo: 04-project-introduce page 만들어주기
const root = document.getElementById('root');
// *03-menu-overview page 만들어 줄 부분
// todo: 4개를 만들어 준다

for (let i = 0; i < 4; i++) {
  let index = i + 1;
  makePage(root, 'article', `project-introduce${i}`);
}

// 똑같이 작성할 부분인데 페이지 스타일링만 따로 분리할 수 있지 않을까? 
// todo: 4개의 프로젝트 소개 페이지 만드는 부분
// *projPage
const projPage = document.getElementsByTagName('article');
const projPageArr = Array.from(projPage);
projPageArr.forEach(elem => {
  setSize(elem, `${hun}vw`, `${hun}vh`);
  borderBk(elem);
  setDisplay(elem, 'grid');
  elem.style.gridTemplateRows = '1fr 1fr 1fr';
})

// *page별로 각각 적용하기
const pages = document.getElementsByTagName('article');
const pagesArr = Array.from(pages);
pagesArr.forEach((elem, index) => {
  elem.style.padding = `${hun/2}px`
});
projPageModule(pages[0]);
projPageModule(pages[1]);
projPageModule(pages[2]);
projPageModule(pages[3]);