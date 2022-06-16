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

const root = document.getElementById('root');
// *03-menu-overview page 만들어 줄 부분
makePage(root, 'section', 'menu-overview');
// console.log(root.lastElementChild);

// *#menu-overview
const overviewPage = document.getElementById('menu-overview');
// console.log(overviewPage);
setSize(overviewPage, `${hun}vw`, `${hun}vh`);
borderBk(overviewPage);

// todo: overviewSection sizing
setDisplay(overviewPage, 'flex', 'center', 'space-between');


// *div data-section = index*2
overviewPage.innerHTML = `${makeElem('div')}${makeElem('div')}`;
// console.log(overviewPage);
const overviewSection = Array.from(overviewPage.children);
// console.log(overviewSection);
// todo: set data-section = index+1;
overviewSection.forEach((elem, index) => {
  borderBk(elem);
  setSize(elem, `${hun/2}vw`, 'inherit');
  if (index === 0) {
    index += 1;
    elem.setAttribute('data-section', index);
    // makeElem('div', 'project-stroke', 'Project');
    makeCanvas(elem, 'project-stroke', 200, 800);
  } else {
    index += 1;
    elem.setAttribute('data-section', index);
    elem.innerHTML = `${makeElem('div')}`;
    // console.log(elem);
  }
})

// *canvas#projText => stroke text
const projText = document.getElementById('project-stroke');
borderBk(projText);
// console.dir(projText);

// projText.width = ``;
// if (projText.getContext) {
  // ?getContext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라메터를 가집니다. 본 튜토리얼에서 다루고 있는 2D 그래픽의 경우, CanvasRenderingContext2D (en-US)을 얻기위해 "2d"로 지정합니다.
  const context = projText.getContext('2d');
  context.font = '2rem sans';
  context.strokeText('PROJECT', 0, 100);
  // ?회전하는 부분 => Math.PI는 원주율이다, 원주율을 계산해서 회전을 시키는 .rotate()라는 메서드를 사용해서 만든다
  // ?https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate
  context.rotate(-90 * Math.PI / 180); //pi가 원주율이고 90을 원주율로 곱해서 / 180도로 나눔 ==> 그러면 각도가 이동을 해야한다
  // console.log(context);

  // x, y, width, height
  // context.fillRect(10, 10, 20, 20);
  // translate(x, y); => move
  // context.translate(150, 75);
  // context.rotate(Math.PI / 2);
  // context.translate(-150, -75);
// }
// projText.style.transform = `rotate(${hun/10*9}deg)`;
// setDisplay(projText, 'inline-block');

// *menu con -> overviewPage.children[1];
const overviewMenuCon = overviewPage.lastElementChild;
// console.log(overviewMenuCon);

// *div -> small text<ul>, menu text con<ul>을 감싸줄 부분들
overviewMenuCon.innerHTML = `${makeElem('div', '', `${makeElem('ul', 'small-text', 'Project')}${makeElem('ul', 'menu-text')}`)}`;
// console.log(overviewMenuCon.children);

// *ul > li
const menuTextCon = document.getElementById('menu-text');
const projNameArr = ['프로젝트 보라도라', '프로젝트 다닥', 'The Volunteers 랜딩 페이지', '개인 프로젝트'];

// *li*8 추가
let li = '';
for(let i = 0; i < 8; i++){
  li += makeElem('li');
}
// console.log(li);
menuTextCon.innerHTML = li;
// console.log(menuTextCon);

// *li rowGap
setSize(menuTextCon, `inherit`, `${hun/2}vh`);
setDisplay(menuTextCon, 'grid', 'flex-end', 'flex-end');
borderBk(menuTextCon);

// todo: 프로젝트명은 data-wave가 없는 곳에 들어감
const menuTextItem = Array.from(menuTextCon.children);
// console.log(menuTextItem);
menuTextItem.forEach((elem, index) => {
  // console.log(elem);
  elem.style.textAlign = 'end';
  elem.style.listStyleType = 'none';
  // todo: text 넣어주기
  let dataValue = index/2;
  if(index%2 === 0){
    elem.textContent = projNameArr[dataValue];
  } else{
    elem.setAttribute('data-wave', Math.round(dataValue));  // 홀수인 경우 나머지 값이 아니다 보니 dataValue가 소수점으로 결과값이 나와서 0.5이상이면 보다 높은 정수값으로 반올림이 되므로 Math.round()를 사용해서 data-wave 값을 줬다
    elem.style.borderTop = '1px solid black';
  }
});
