// ?우선 js import 문제를 해결
// import { setDisplay } from "./module/css-function";
// import { setDisplay } from "./module/css-function";
// import {setBgColor, setDisplay, set, getAppendName} from "./module/css-function.js";
// import "./module/css-function";
// console.log(a);

// variable declaration
let hun = 100;
const colorObj = {
  colorBk: `#000`,
  colorC4: `#c4c4c4`,
  color33: `#333`
}
// function
const getAppendName = (element) => {
  // 언제 가져오면 안되는가?
  // null, 빈값일 때는 가져오면 안된다
  if (element.tagName !== null && element.tagName !== '') {
    return element.tagName;
  }
}

const setBgColor = (elem, bgColor) => {
  elem.style.backgroundColor = bgColor;
}

const setDisplay = (elem, display, align = 'center', justify = 'center', direction = 'row') => {
  if (typeof elem === 'object') {
    elem.style.display = display;
    elem.style.alignItems = align;
    elem.style.justifyContent = justify;
    elem.style.flexDirection = direction;
  } else {
    console.error('try again');
  }
}

const setSize = (elem, width, height) => {
  elem.style.width = width;
  elem.style.height = height;
} 

// *children
const introduce = document.getElementById('introduce');
console.log(introduce);
setDisplay(introduce, `grid`);
// 1.  그리드로 두 컨테이너 크기를 구분하고
// 1. gridTemplateRows 1fr 3fr
introduce.style.gridTemplateRows = `1fr 3fr`;

// *introduce.children test border
// for(let i = 0; i < introduce.children.length; i++){
//   // introduce.children[i].classList.add('border-bk');
//   setSize(introduce.children[i], `${hun}vw`);
//   // setBgColor(introduce.lastElementChild, '#c4c4c4');
// }

// *introduce.children
const behind = document.getElementById('behind');
const wave = document.getElementById('wave');
console.log(behind);
console.log(wave);

// !behind
// *#behind => 1fr
// *behind style
// 2-1. flex로 가로로 나열하고
setDisplay(behind, `flex`, `center`, `space-around`);

// !wave
// *#wave => 3fr
// *wave style
// 3. 텍스트 박스 크기를 grid로 나눠주기
setDisplay(wave, `grid`, `center`, `space-around`);
setSize(wave, `${hun}%`, `${hun}%`);
// 3-1. 2fr .skillset 1fr .introduce 1fr .github 1fr .notion
wave.style.gridTemplateRows = `2fr 1fr 1fr 1fr`;
// ?이 부분을 svg가 아니라 코드로 작성해야하나?
// wave.style.backgroundImage = url(`./img/svg/wave.svg`);
// 3-3. 1fr인 부분을 3fr보다 뒤로 가도록 z-index를 조절한다
wave.zIndex = 2;

console.log(wave.children);

// *wave.children 공통 적용
// 1. 글씨를 가운데 정렬
for(let i = 0; i < wave.children.length; i++){
  wave.children[i].style.textAlign = `center`;
}

// *#skillset
// !querySelector를 쓰면서 아이디라는 것을 명시 안하면 안되지
const skillSet = document.querySelector('#skillset');
console.log(skillSet.children);

// *#skillset > #dropmenu
const dropMenu = skillSet.children[0];
console.log(dropMenu);
console.log(dropMenu.children);

// 배열로 텍스트 넣어주기
// skillSet style
// 1. 리스트 타입 논 => ul
// 2. row 간격


// interaction 1. 클릭 이벤트로 드롭다운을 만들어줘야함
// interaction 2. 클릭 이벤트 타겟을 dataset으로 컨트롤 해줘야 함(선택됐다는 인터랙션이 필요)

// *#introduce

// *.github

// *.notion








// !interation dropdown
// *droptext 숨겨준 부분
const dropText = document.getElementById('droptext');
dropText.classList.add('none');






