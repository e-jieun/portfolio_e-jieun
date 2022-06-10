import {
  getAppendName,
  setBgColor,
  setDisplay,
  setPosition,
  setSize
} from "./module/css-function.js";

function xBtnChild() {
  return '<div></div><div></div>'
}

function img() {
  return `<img>`;
}

function makeDiv() {
  return 'div';
}

// todo: 우선 공통 적용이 아닌 한 페이지씩 차근차근 적용해보자 -> 그리고 나서 공통된 부분들을 함수로 묶어서 적용하자

// *#project-overview
const projOverview = document.getElementById('project-overview');
console.log(projOverview);

//*#project-1
const projOne = document.getElementById('project-1');
console.log(projOne);

setSize(projOne, '100vw', '100vh');

// *projOne.children
const projOneChild = Array.from(projOne.children);
projOneChild.forEach(elem => {
  setSize(elem, 'inherit', '50%');
  elem.classList.add('border-bk');
});

// *projOneChild[0]
setDisplay(projOneChild[0], 'flex', 'center', 'center');

// *projOneChild[0].children === p
const projOneChildFirstChild = projOneChild[0].firstElementChild;
setPosition(projOneChildFirstChild, 'relative', '', '-25vh');

// *projOneChild[1]
setDisplay(projOneChild[1], 'flex', 'flex-end', 'center');
// todo: 배경에 동그란 구 형태의 파도 모양을 넣어줘야 함
projOneChild[1].style.backgroundImage = 'url(./img/svg/wave.svg)';
projOneChild[1].style.backgroundRepeat = 'no-repeat';
projOneChild[1].style.backgroundSize = 'cover';
projOneChild[1].style.backgroundPosition = 'center';

// *projOneChild[1].children === div
const projOneChildLastChild = projOneChild[1].firstElementChild;
console.log(projOneChildLastChild);
setSize(projOneChildLastChild, '10vmax', '30vmax');
projOneChildLastChild.style.textAlign = 'center';
setPosition(projOneChildLastChild, 'relative');
projOneChildLastChild.classList.add('border-bk');

// *img 태그를 projOneChildLastChild의 자식요소로 생성해준 부분
// ?동시에 이미지 태그를 붙여주려고 했는데 appendChild()로는 한 페이지에만 적용이 되서 innerHTML로 '<img>'를 리턴하는 함수를 만들어서 값을 대입하는 부분에 함수를 호출해줬더니 자식요소로 잘 부여됐다
projOneChildLastChild.innerHTML = img();
// console.log(projOneChildLastChild);

const surfingBoard = projOneChildLastChild.firstElementChild;
console.log(surfingBoard);
surfingBoard.src = './img/svg/sufingboard.svg';

// *fontsize 
let fontSize = 0;
let fontPosition = 0;
// *lastchild position
let lastchildPosition = 0;
let lastchildPositionLimit = 15;
// *font position
let firstchildPosition = -25;
let firstchildPositionLimit = -10;
let fontSizeLimit = 25;

window.addEventListener('wheel', () => {
  // *wheel event로 수평선에 가까워지도록 하는 움직임
  // ?projOneChildFirstChild에 위치를 조정할 수 있는 값이 필요할 것 같음
  fontSize += 2;
  lastchildPosition += 1;
  firstchildPosition += 1;
  projOneChildFirstChild.style.bottom = `${firstchildPosition}vh`;
  projOneChildFirstChild.style.fontSize = `${fontSize}px`;
  console.log(firstchildPosition);
  projOneChildLastChild.style.bottom = `${lastchildPosition}vh`;
  // ?&& 연산자를 사용했을 땐 모두 부합하는 조건식이 아니어서 ||를 사용했더니 하나만 부합하더라도 실행되도록 했더니 오히려 잘된다... 문제는 텍스트의 위치가 갑자기 변화하는 이상한 현상이 일어나서...
  // !firstchildPosition 값이 너무 커서 일어난 현상이었다
  if (lastchildPosition >= lastchildPositionLimit && fontSize >= fontSizeLimit || firstchildPosition >= firstchildPositionLimit) {
    lastchildPosition = lastchildPositionLimit;
    fontSize = fontSizeLimit;
    firstchildPosition = firstchildPositionLimit;
  }
});

// *window wheel event 끝난 부분
// ------------------------------------------

// *popUp 만들어 줄 부분;
const appendDiv = document.createElement(makeDiv());
setDisplay(appendDiv, 'flex', 'center', 'space-evenly', 'column');
projOne.appendChild(appendDiv);

const popUp = projOne.lastElementChild;
console.log(popUp);
setSize(popUp, '100vw', '100vh');
// setDisplay(popUp, 'flex', 'center', 'space-evenly', 'column');
// todo: 현재 페이지에 겹치도록 만들어 줄 부분
console.log(popUp.parentNode.offsetTop);
console.log(projOne.scrollTop);
// `${projOne.offsetTop}+px`
setPosition(popUp, 'absolute', '300vh', '');
popUp.style.zIndex = 2;
// popUp.style.position = 'absolute';
// todo: 프로젝트 페이지의 위치에 겹치도록 해주려면 현재 페이지 위치의 값을 계산해주는 함수를 만들어야겠다
// popUp.style.top = projOne.offsetTop;

popUp.classList.add('popup-bg');
console.dir(projOne);
console.dir(popUp);


// todo: popUp 안에 타이틀, 설명, 노션 아이콘+설명, 깃허브 아이콘+설명, x버튼 구성
const popUpChildArr = [];
const popUpChild = ['<h1></h1>', '<div></div>', '<a></a><p></p>', '<a></a><p></p>', '<div id="x">'];
popUpChild.forEach(elem => {
  popUpChildArr.push(elem);
})
popUp.innerHTML = popUpChildArr.join('');

// *popUp.children
const popUpItems = popUp.children;

// *타이틀
popUpItems[0].textContent = 'Project01. 보라도라';
// *설명
setSize(popUpItems[1], '50vw', '');
popUpItems[1].textContent =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem neque provident possimus quasi! Omnis itaque cum voluptatum optio sit soluta labore necessitatibus non. Suscipit obcaecati esse doloribus ipsa at quasi.';

// *anchor
// todo: 아이콘 부분은 <a></a> 안에 img 넣어주기
for (let i = 0; i < popUpItems.length; i++) {
  // 인덱스가 2번일 때
  // 인덱스가 4번일 때
  if (i % 2 === 0 && i <= 4 && i > 0) {
    // popUpItems
    console.log(i);
    // <!--todo: img tag를 넣어줄 부분-->
    popUpItems[i].innerHTML = img();
    // img 태그 src로 넣어준 부분 => 크기를 조절해야 함
    setSize(popUpItems[i].firstElementChild, '50px', '50px');
    if (i / 2 === 1) {
      console.dir(popUpItems[i]);
      popUpItems[i].href = 'https://www.notion.so/e-jieun-265effdb10cb4a47a248cbf8bfc18445';
      popUpItems[i].firstElementChild.src = "/img/svg/notion-icon.svg";
    } else {
      console.dir(popUpItems[i]);
      popUpItems[i].href = 'https://github.com/e-jieun';
      popUpItems[i].firstElementChild.src = "/img/svg/github-icon.svg";
    }
  }
}

// *pop-up 적용해줄 부분
// todo: click event -> projOneChildLastChild
popUp.classList.add('display-none');
let isStatus;
projOneChildLastChild.addEventListener('click', makePopUp);

function makePopUp() {
  isStatus = true;
  if (isStatus === true) {
    console.log('make pop-up');
    popUp.classList.remove('display-none');
    // isStatus = false;
  }
}

// *x버튼
const xBtn = document.getElementById('x');
xBtn.innerHTML = xBtnChild();
console.log(xBtn);

const xBtnChildArr = Array.from(xBtn.children);
console.log(xBtnChildArr);

let deg = 45;
// x만들어 줄 부분
xBtnChildArr.forEach((elem, index) => {
  setSize(elem, '30px', '1px');
  elem.classList.add('x-bg');
  index = index === 0 ? elem.style.transform = `rotate(${deg}deg)` : elem.style.transform =
    `rotate(-${deg}deg)`;
});

xBtn.addEventListener('click', () => {
  console.log(projOne.lastElementChild);
  popUp.classList.add('display-none');
});