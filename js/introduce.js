// ?우선 js import 문제를 해결
// import { setDisplay } from "./module/css-function";
// import { setDisplay } from "./module/css-function";
// import {setBgColor, setDisplay, set, getAppendName} from "./module/css-function.js";
// import { varObj } from "css-function.js";
// console.log(a);

// variable declaration
let hun = 100;
const colorObj = {
  colorBk: `#000`,
  colorC4: `#c4c4c4`,
  color33: `#333`,
  colorNa: `#3773A5`,
  colorFf: `#fff`,
  colorSb: `#BAD8F2`
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
setBgColor(introduce, `${colorObj.colorSb}`);
introduce.style.color = `${colorObj.colorFf}`;
// 1.  그리드로 두 컨테이너 크기를 구분하고
// 1. gridTemplateRows 1fr 3fr
introduce.style.gridTemplateRows = `1fr 1fr`;

// *introduce.children test border
// for(let i = 0; i < introduce.children.length; i++){
//   // introduce.children[i].classList.add('border-bk');
//   setSize(introduce.children[i], `${hun}vw`);
//   // setBgColor(introduce.lastElementChild, '#c4c4c4');
// }

// *introduce.children
const behind = document.getElementById('behind');
// !이미지 넣어주기
const wave = document.getElementById('wave');
console.log(behind);
console.log(wave);

// !behind
// *#behind => 1fr
// *behind style
// 2-1. flex로 가로로 나열하고
setSize(behind, `${hun}vmin`)
setDisplay(behind, `flex`, `center`, `space-around`);
console.log(behind.children);
// *behind.children
const goodSurferText = behind.firstElementChild;
console.log(goodSurferText);
goodSurferText.setAttribute(`style`, `font-size: 2.5rem; font-weight: ${hun*9}; color: ${colorObj.colorSb};`);
// ?canvas API? strokeText, strokeStyle을 사용하려면 캔버스 API를 사용해야 한다고 한다 => test용으로 사용해보자
// !top, right, bottom, left 네가지 방향으로 그림자를 줘서 보더 텍스트를 만들어 줌
// css webkit를 사용하면 사용할 수 있다
// goodSurferText.style.textShadow = `-1px 0 ${colorObj.colorNa}, 0 1px ${colorObj.colorNa}, 1px 0 ${colorObj.colorNa}, 0 -1px ${colorObj.colorNa}`;


// !wave
// *#wave => 3fr
// *wave style
// 3. 텍스트 박스 크기를 grid로 나눠주기
setDisplay(wave, `grid`, `center`, `space-around`);
// setSize(wave, `${hun}%`, ``);
// 3-1. 2fr .skillset 1fr .introduce 1fr .github 1fr .notion
wave.style.gridTemplateRows = `1fr 1fr 1fr 1fr`;
setSize(wave, `${hun}vw`, `${hun}vh`);
// ?이 부분을 svg가 아니라 코드로 작성해야하나?
// wave.style.backgroundImage = url(`./img/svg/wave.svg`);
// 3-3. 1fr인 부분을 3fr보다 뒤로 가도록 z-index를 조절한다
wave.zIndex = 2;

console.log(wave.children);

// *wave.children 공통 적용
// 1. 글씨를 가운데 정렬
for (let i = 0; i < wave.children.length; i++) {
  wave.children[i].style.textAlign = `center`;
}
// *wave.lastElementChild
const iconCon = wave.lastElementChild;
console.log(wave.lastElementChild);
console.log(iconCon);
// *wave.lastElementChild
setDisplay(iconCon, `flex`, ``, `space-around`);

// *#skillset
// ?querySelector를 쓰면서 아이디라는 것을 명시 안하면 안되지
const skillSet = document.querySelector('#skillset');
console.log(skillSet.children);

// *#skillset > #dropmenu
const dropMenu = skillSet.children[0];
const li = dropMenu.children;
console.log(dropMenu);
console.log(dropMenu.children);
console.log(li);

// *dropMenu style
setDisplay(dropMenu, `grid`);
dropMenu.style.rowGap = `${hun/hun}rem`;

// !interation dropdown
// 1. li 중 우선 data-menutext를 숨겨주고
for (let i = 0; i < li.length; i++) {
  li[i].style.listStyle = `none`;
  if (li[i].dataset.menutext) {
    li[i].classList.add('none');
  }
}
//*h2 간격 없애주기
const h2Shaka = document.getElementsByTagName('h2');
console.log(h2Shaka);
// h2Shaka.style.margin = 0;

// skillSet style
// 1. 리스트 타입 논 => ul
// 2. row 간격

// interaction 1. 클릭 이벤트로 드롭다운을 만들어줘야함
// interaction 2. 클릭 이벤트 타겟을 dataset으로 컨트롤 해줘야 함(선택됐다는 인터랙션이 필요)

// *#introduce
// 2. li의 컨테이너에 이벤트 생성
// 3. 이벤트 타겟을 클릭하면ㄴ li의 data-menutext를 나타내준다
dropMenu.addEventListener('mouseover', (event) => {
  // 이벤트 타겟 === 데이터셋 클릭
  if (event.target.dataset.click) {
    console.log(event.target);
    for (let i = 0; i < li.length; i++) {
      // 이벤트 타겟 데이터셋 클릭 값 === 설명부분 li[i] 데이터셋 메뉴텍스트 값
      if (event.target.dataset.click === li[i].dataset.menutext) {
        // display: none; 지워주기
        li[i].classList.remove('none');
      } else {
        // 설명부분 li[i] 데이터셋 메뉴텍스트 값
        if (li[i].dataset.menutext) {
          // display: none; 더해주기
          li[i].classList.add('none');
        }
      }
    }
  }
})

// *ul의 paddingLeft 모두 없애주기
const ul = document.getElementsByTagName('ul');
console.log(ul);
for(let i = 0; ul.length; i++){
  ul[i].style.paddingLeft = 0;
}