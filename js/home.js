// import js
import {
  getAppendName,
  setBgColor,
  setDisplay,
  setSize,
  setPosition
} from './module/css-function.js';
import colorObj from "./module/color.js";

// variable declaration
let hun = 100;

// root.children
const home = document.getElementById('home');
console.log(home);
console.log(root.children);

// root.children요소들의 크기를 화면 100vw, 100vh의 한 페이지씩 설정해주기
for (let i = 0; i < root.children.length; i++) {
  root.children[i].setAttribute(`style`, `width: ${hun}vw; height: ${hun}vh;`);
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
  setSize(makeHomeChild, `${hun}%`, ``)
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
    setSize(homeChildOne, ``, `${hun/10*4}vh`);
    setDisplay(homeChildOne, 'grid');
    setPosition(homeChildOne, `relative`, `${hun/10}vh`);
    homeChildOne.style.gridTemplateRows = `1fr 1fr 3fr`;

    // *homeChildOne.children를 append
    // 1. 3개의 자식요소를 1에 덧붙여주고
    const homeOneChildArr = [1, 2, 3];
    // 우선 3개 자식요소의 태그를 덧붙일 때 순서대로 for문을 돌리도록 해주고
    for (i = 0; i < homeOneChildArr.length; i++) {
      const makeHomeOneChild = document.createElement('div');
      makeHomeOneChild.setAttribute(`data-item`, homeOneChildArr[i]);
      // *homeChildOne.children style
      makeHomeOneChild.setAttribute(`style`, `width: ${hun/2}%;`);
      setSize(makeHomeOneChild, `${hun/3}vw`, `${hun}%`);
      // 2. 자식요소를 3개 붙여줘야 하는데
      homeChildOne.append(makeHomeOneChild);
    }
  }
}
// *homeChildOne.children에 공통적용할 부분
for (let i = 0; i < homeChildOne.children.length; i++) {
  setDisplay(homeChildOne.children[i], `flex`);
  homeChildOne.children[i].style.width = `${hun}vw`;

  // *각각 homeChildOne.children[i]에 세부 적용할 부분
  // *homeChildOne.children[0] > div => Shaka!
  if (i === 0) {
    homeChildOne.children[i].innerHTML = `<div>Let's Surf!</div>`;
    // *homeChildOne.children[0].firstElementChild => <div>Shaka!</div>
    homeChildOne.children[i].firstElementChild.setAttribute(`style`, `font-size: 1.5rem; font-weight: 800; color: ${colorObj.colorNa}`);
    console.log(homeChildOne.children[i]);
    // *homeChildOne.children[1] > img => waveline
  } else if (i === 1) {
    homeChildOne.children[i].innerHTML = `<img src = './img/svg/waveline-retry.svg'></img>`;
    homeChildOne.children[i].firstElementChild.style.width = `${hun/10}vmax`;
    // *homeChildOne.children[2] > img => shaka.svg
  } else {
    // !현재 shaka.svg 이미지를 변경한 곳
    // ?파도도 면이고 샤카 제스처 면 이미지의 손일 때는 대비도 없고 강조점이 없었어서 눈에 잘 들어오지 않는 구조였었다 -> 샤카 제스처가 선으로 이뤄졌을 때는 분리가 되면서 크기가 훨씬 작음에도 불구하고 개방감이 들고 제스처의 동적인 부분이 좀 더 눈에 들어오는 구조였다

    homeChildOne.children[i].innerHTML = `<img src = './img/svg/shaka.svg'></img>`;
    const shakaImg = homeChildOne.children[i].children[0];
    shakaImg.style.width = `250px`;
    shakaImg.style.position = `relative`;
    setPosition(shakaImg, `relative`, `${hun/2}px`);

    // !손 이미지에 마우스 오버하면 움직이는 애니메이션이 필요
    // ?만들고 나니까 마우스 아웃을 하면 멈춰줄 이벤트가
    shakaImg.addEventListener('mouseover', shakeMove);

    function shakeMove() {
      // console.log(event);
      // 1.움직임
      const shakaImgMove = [{
          transform: `rotate(0)`
        },
        {
          transform: `rotate(20deg)`
        },
        {
          transform: `rotate(-20deg)`
        },
        {
          transform: `rotate(0)`
        }
      ];
      // 2.반복과 지속시간 변수
      const shakaImgTime = {
        duration: 500,
        iterations: 2
      }
      // 3.shakaImg.animate()에 적용
      shakaImg.animate(shakaImgMove, shakaImgTime)
    }

    // !mouseover iterations 조절로 해결을 했다
    // ?mouseout이벤트로 멈춰줄 필요가 있음
    // shakaImg.removeEventListener('mouseover', shakeMove);
  }
}

console.log(homeChildOne.children[1].children);
// *homeChildOne.children[i] > div+img+img
// const homeOneChild = homeChildOne.children;
// console.log(homeOneChild);

// 2>waveCon>wave>button#introduce+button#project
// ?appendChild가 안되고 있다 왜일까?
// !결국 if문을 제외하고 사용했다
// *home.children[1].data-home = '2';
// *homeChildTwo.children
homeChildTwo = home.lastElementChild;
// waveCon을 자식요소로 생성해 덧붙여준다
setDisplay(homeChildTwo, 'flex');
setSize(homeChildTwo, ``, `${hun/10*6}vh`);

// *waveCon
// *waveCon => wave.svg
const makeWaveCon = document.createElement('img');
homeChildTwo.appendChild(makeWaveCon);
// console.log(getAppendName(homeChildTwo));

const waveCon = homeChildTwo.children[0];
// !waveCon이 파도 움직임을 적용해줄 부분
// waveCon.style.background = `url(./img/svg/wave.svg)`;
waveCon.src = './img/svg/wave.svg';
// 맨 마지막 인수
setPosition(waveCon, `absolute`, ``, ``, ``, ``, `-1`);
setSize(waveCon, `5000px`, `500px`);
console.log(waveCon.style);
// console.log(waveCon);

// !.animate();
// 웨이브 움직임을 주는 공간
waveCon.addEventListener('load', () => {
  const waveMove = [{
      marginLeft: 0
    },
    {
      marginLeft: '-800px'
    }
  ];
  const waveTime = {
    duration: 5000,
    iterations: Infinity // !계속해서 작동하게 해주려면 Infinity로 설정했어야 했음
  }
  // !변수를 먼저 사용해서 작동이 안된 것 =>  
  waveCon.animate(waveMove, waveTime);
})

// waveCon에 div을 append 해준다
// *btnCon
const makeBtn = document.createElement('div');
setSize(makeBtn, `${hun}vw`, `${hun/5}px`);
setPosition(makeBtn, 'absolute');
waveCon.before(makeBtn);
console.log(homeChildTwo);
const btnCon = homeChildTwo.firstElementChild;
btnCon.innerHTML = `<div><div data-menutext = '1'>Introduce</div></div><div><div data-menutext = '1'>Project</div></div>`;
setDisplay(btnCon, 'flex', 'center', 'space-around');
console.log(btnCon.children);
// *btn
const btn = btnCon.children;
for (let i = 0; i < btn.length; i++) {
  setSize(btn[i], `${hun/30}vmax`, `${hun/30}vmax`);
  btn[i].classList.add('bg-color');
  btn[i].style.borderRadius = `${hun/2}%`;
  setDisplay(btn[i], `flex`, ``, `center`);
  setPosition(btn[i].children[0], `relative`, `${hun/10*4}px`);
}
// *메뉴의 텍스트 컬러를 변경해줘야함
// 1. data-menutext값이 1인 태그라면
// 1-1. 색 변경(colorObj.colorNa) 
// 자식요소가 유사배열 for()안에서 적용해줘야 한다
for (let i = 0; i < btn.length; i++) {
  if (btn[i].firstElementChild.dataset.menutext === '1') {
    btn[i].firstElementChild.style.color = `${colorObj.colorNa}`;
  }
}

// *data-menutext = '1'을 값으로 가지고 있는 부분들에 클릭이벤트 걸어주기
const bgColor = document.getElementsByClassName('bg-color');
const bgColorArr = Array.from(bgColor);
bgColorArr.forEach((elem, index) => {
  console.log(elem.children);
  // 이 부분에 이벤트를 달아줘야 한다
  // introduce와 project를 분리해주자
});