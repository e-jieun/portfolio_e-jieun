// top button interaction
import {
  setSize,
  setDisplay,
  setPosition
} from "./module/css-function.js";
import returnPercent from "./module/cal-function.js";
import colorObj from "./module/color.js";
let hun = 100;

const root = document.getElementById('root');
const topBtn = document.querySelector('button');
console.log(topBtn);

topBtn.style.visibility = 'hidden';
setSize(topBtn, `${hun/20}vmax`, `${hun/20}vmax`);
setPosition(topBtn, `fixed`, ``, `0`, ``, `0`);

// top: 0; 으로 포지션을 이동하도록 해주는 topBtn 클릭이벤트
topBtn.addEventListener('click', () => {
  console.log(root.offsetHeight);
  window.scrollTo({
    top: 0,
    behavior: `smooth`
  });
})

// 스크롤Y 값이 전체 화면 값의 20% 이상일 때만 나타나도록 해주는 인터랙션
// 1. 퍼센트를 import한 함수로 계산해준다
// console.log(Math.round(returnPercent(window, root.offsetHeight, window.scrollY)));
let currentPercent = Math.round(returnPercent(window, root.offsetHeight, window.scrollY));
// 2. 윈도우 휠 이벤트를 생성해준다
window.addEventListener('wheel', () => {
  console.dir(window);
  console.log(window.scrollY); //=== pageYoffset
  // 3. if(윈도우 휠 이벤트에서 scrollY값이 20%보다 작으면) 보이지 않도록 해준다 
  // !=> 기본 스타일링이 보이지 않도록 해주는 것이고 20보다 크면 바꿔주는 쪽으로 수정하기
  if (currentPercent < 20) {
    console.log(Math.round(returnPercent(window, root.offsetHeight, window.scrollY)));
    topBtn.style.visibility = 'hidden';
  } else {
    console.log(Math.round(returnPercent(window, root.offsetHeight, window.scrollY)));
    topBtn.style.visibility = 'visible';
  }
});
// 4. 20%보다 클 경우는 else로 보이도록 해준다