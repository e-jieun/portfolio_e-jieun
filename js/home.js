// ?다시 import를 시도해보기
// variable declaration
// import { hun } from "./module/variable";
// import { colorObj } from "./module/variable";

let hun = 100;
const colorObj = {
  colorBk: `#000`,
  colorC4: `#c4c4c4`,
  color33: `#333`
}
// function
function getAppendName(element) {
  // 언제 가져오면 안되는가?
  // null, 빈값일 때는 가져오면 안된다
  if (element.tagName !== null && element.tagName !== '') {
    return element.tagName;
  }
}

function setBgColor(elem, bgColor) {
  elem.style.backgroundColor = bgColor;
}

function setDisplay(elem, display, align = 'center', justify = 'center', direction = 'row') {
  if (typeof elem === 'object') {
    elem.style.display = display;
    elem.style.alignItems = align;
    elem.style.justifyContent = justify;
    elem.style.flexDirection = direction;
  } else {
    console.error('try again');
  }
}

function setSize(elem, width = null, height = null) {
  if (typeof elem === 'object') {
    elem.style.width = width;
    elem.style.height = height;
  } else {
    console.error('try again');
  }
}

function setPosition(elem, position, top = null, bottom = null, left = null, right = null) {
  if (typeof elem === 'object') {
    elem.style.position = position;
    elem.style.top = top;
    elem.style.bottom = bottom;
    elem.style.left = left;
    elem.style.right = right;
  }
}

// root
const root = document.getElementById('root');
// root.children
const home = document.getElementById('home');
console.log(root);
console.log(home);
console.log(root.children);

// root.children요소들의 크기를 화면 100vw, 100vh의 한 페이지씩 설정해주기
for (let i = 0; i < root.children.length; i++) {
  root.children[i].setAttribute(`style`, `width: ${hun}vw; height: ${hun}vh; border: ${hun/hun}px solid ${colorObj.colorBk};`);
}

// home을 2개의 박스로 나눠주고 그 안에 뭘 넣을지
// 1. 두개의 자식요소를 만들어줘야 한다
console.log(home.tagName.toLowerCase());
// home의 태그이름을 가져오주는 함수를 만들어 준다
// 1-1. 문서 안에 두 개의 자식요소(section)를 만들어 줄 변수를 만들어주고
let homeChildArr = [1, 2];
// 두개의 자식요소를 만들어줘야 하니까 두 번 반복해줄 반복문을 만들어 준다
for (let i = 0; i < homeChildArr.length; i++) {
  const makeHomeChild = document.createElement(getAppendName(home));
  console.log(makeHomeChild);
  // 두 자식요소는 다른 아이템들을 감싸는 경우가 많을 것 같으니까 data-set을 붙여준다
  // 첫번째 요소는 data-home = '1', data-home = '2'
  makeHomeChild.setAttribute(`data-home`, homeChildArr[i]);
  setSize(makeHomeChild, `${hun}%`, `${hun/2}vh`)
  makeHomeChild.classList.add('border-bk');
  // 1-2. 두 개의 자식요소를 부모요소에 붙여준다
  home.appendChild(makeHomeChild);
}
console.log(home.children);

// home.children 식별
// !선언만 해주는 것이어서 let을 사용해야함
let homeChildOne;
let homeChildTwo;

// data-home 값으로 핸들링하기
for (let i = 0; i < home.children.length; i++) {
  // *home.children[0].data-home = '1';
  if (home.children[i].dataset.home === '1') {
    console.log(home.children[i].dataset); // data-home = '1'
    // 1>text+svgCon+svgCon
    homeChildOne = home.firstElementChild;
    // *homeChildOne
    // console.log(homeChildOne);
    // *homeChildOne style
    setDisplay(homeChildOne, 'grid');
    homeChildOne.style.gridTemplateRows = `1fr 1fr 3fr`;

    // 1. 3개의 자식요소를 1에 덧붙여주고
    const homeOneChildArr = [1, 2, 3];
    // 우선 3개 자식요소의 태그를 덧붙일 때 순서대로 for문을 돌리도록 해주고
    for (i = 0; i < homeOneChildArr.length; i++) {
      const makeHomeOneChild = document.createElement('div');
      makeHomeOneChild.setAttribute(`data-item`, homeOneChildArr[i]);
      // *homeChildOne.children style
      makeHomeOneChild.classList.add('border-bk');
      makeHomeOneChild.setAttribute(`style`, `width: ${hun/2}%;`);
      setSize(makeHomeOneChild, `${hun/3}vw`, `${hun}%`);
      // 2. 자식요소를 3개 붙여줘야 하는데
      homeChildOne.append(makeHomeOneChild);
    }
  }
}
// *homeChildOne.children
console.log(homeChildOne.children);
for(let i = 0; i < homeChildOne.children.length; i++){
  // *homeChildOne.children[0]
  if(i === 0){
    homeChildOne.children[i].textContent = `Shaka!`;
  // *homeChildOne.children[1]
  } else if(i === 1){
    // !svg line img 넣어주기 
    homeChildOne.children[i].textContent = `wave line`;
  // *homeChildOne.children[2]
  } else{
    homeChildOne.children[i].innerHTML = `<img src = './img/svg/shaka.svg'></img>`;
  }
}

// 1>text+svgCon+svgCon

// 2>waveCon>wave>button#introduce+button#project
// ?appendChild가 안되고 있다 왜일까?
// !결국 if문을 제외하고 사용했다
// *home.children[1].data-home = '2';
// *homeChildTwo.children
homeChildTwo = home.lastElementChild;
// waveCon을 자식요소로 생성해 덧붙여준다
setDisplay(homeChildTwo, 'flex');
// *waveCon
const makeWaveCon = document.createElement('img');
homeChildTwo.appendChild(makeWaveCon);
// console.log(getAppendName(homeChildTwo));
const waveCon = homeChildTwo.children[0];
setSize(waveCon, ``, `${hun}%`);
waveCon.src = './img/svg/wave.svg';
// waveCon.classList.add(`bg-colorC4`);
console.log(waveCon);

// waveCon에 div을 append 해준다
// *btnCon
const makeBtn = document.createElement('div');
setSize(makeBtn, `${hun}vw`, `${hun/5}px`);
setPosition(makeBtn, 'absolute');
makeBtn.classList.add('border-bk');
waveCon.before(makeBtn);
console.log(homeChildTwo);
const btnCon = homeChildTwo.firstElementChild;
btnCon.innerHTML = `<div><div>Introduce</div></div><div><div>Project</div></div>`;
setDisplay(btnCon, 'flex', 'center', 'space-around');
console.log(btnCon.children);
// *btn
const btn = btnCon.children;
for (let i = 0; i < btn.length; i++) {
  setSize(btn[i], `${hun/30}vmax`, `${hun/30}vmax`);
  btn[i].classList.add('bg-colorC4');
  btn[i].style.borderRadius = `${hun/2}%`;
  setDisplay(btn[i], `flex`, ``, `center`);
  setPosition(btn[i].children[0], `relative`, `${hun/10*4}px`);
}