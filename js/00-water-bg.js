import colorObj from "./module/color.js";
import {
  setDisplay,
  setPosition,
  setSize
} from "./module/css-function.js";
import makeElem from "./module/makeelem.js";
import makePage from "./module/makepage.js";
import hun from "./module/reset.js";
import makeBubble from "./module/makebubble.js"
import randomNum from "./module/randomnum.js"
import setBubble from "./module/setbubble.js"


// 다 실행되고 나서 나타나도록 했다, 위치 값만 조절하면 될 것
const makeWaterBg = () => {
  const root = document.getElementById('root');
  // *00-배경으로 사용될 water-bg 만들어 줄 부분
  makePage(root, 'section', 'water-bg');
  // console.log(root.children);

  // * waterBg
  const waterBg = document.getElementById('water-bg');
  // console.log(waterBg);
  // *배경을 담을 상자 크기
  setSize(waterBg, `${hun}vw`, `${hun*2}vh`);
  setPosition(waterBg, 'fixed', `0px`);
  waterBg.style.zIndex = -1;
  waterBg.style.backgroundColor = `${colorObj.colorNa}`;
  console.log(waterBg);
  window.addEventListener('click', () => {
    console.log(window.scrollY);
  })

  // todo: 배경이 고정된 채로 인트로 페이지를 제외한 나머지 페이지에서 보여주려면...?
  // todo: 1. 우선 인트로 페이지가 끝나고나서 생성되어야 함 => 해결 인트로에서 모든 인터랙션이 종료된 후에 생성되도록 했다 -> 주석 처리해 둠
  // todo: 2. 물방울이 생기도록 요소가 랜덤의 숫자로  반복해서 생겨나도록 해야한다 -> waterBg가 인트로 페이지 이후에 로드 될 때

  // *랜덤의 숫자가 리턴되도록 해주는 함수
  const randomNum = (min = 0, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // ?물 배경이 아래에 fixed로 고정되어 있음, 패럴랙스로 사용하기 위해서
  window.addEventListener('wheel', () => {
    // ?물방울이 생기도록 요소가 랜덤의 숫자로 반복해서 자식요소로 덧붙여지도록 해준다
    // ?요소마다 크기를 정해주고
    // ?짝수는 stroke, 홀수는 fill로 채워준다
    // ?그리고 요소마다 간격을 두로 animate()로 움직임을 부여해준다
    // console.log('loaded');
    // console.log(randomNum(1, 50));
    // *물방울들을 정렬
    setDisplay(waterBg, 'flex', 'space-around', 'flex-end');

    // *waterBg에 물방울이 될 요소들을 자식요소로 넣어줌
    waterBg.innerHTML += `${makeBubble(2, 'div', '')}`;    
  })
}

export default makeWaterBg;