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

  // todo: 배경이 고정된 채로 인트로 페이지를 제외한 나머지 페이지에서 보여주려면...?
  // todo: 1. 우선 인트로 페이지가 끝나고나서 생성되어야 함 => 해결 인트로에서 모든 인터랙션이 종료된 후에 생성되도록 했다 -> 주석 처리해 둠
  // todo: 2. 물방울이 생기도록 요소가 랜덤의 숫자로  반복해서 생겨나도록 해야한다 -> waterBg가 인트로 페이지 이후에 로드 될 때
    const bubbleGun = setInterval(() => {
      let waterBgChild = ''
      waterBgChild += `${makeBubble(2, 'div', '')}`;
      waterBg.innerHTML = waterBgChild;

      setDisplay(waterBg, 'flex', 'flex-end', 'space-around');

      // *bubble 요소를 랜덤 숫자만큼 덧붙여 줄 부분 => 랜덤 숫자만큼 만들어지면 너무 많아져서, 하나씩 만들어 준다
      waterBg.innerHTML += `${makeBubble(5, 'div', '')}`;

      // *animate
      let bubbleX = randomNum(1, `${hun}`);
      let bubbleY = randomNum(1, `${hun}`);
      let bubbleX2 = randomNum(1, `${hun}`);
      let bubbleY2 = randomNum(1, `${hun}`);

      // ?물방울이 가로로 이동하는 것이 문제
      const bubbleMoving = [{
          transform: `translate(${bubbleX}vw, ${bubbleY}vh)`
        },
        {
          transform: `translate(${bubbleX2}vw, ${bubbleY2}vh)`
        },
        {
          transform: `translate(${bubbleX}vw, -100vh)`
        }
      ]
      const bubbleMovingReverse = [{
          transform: `translate(${bubbleX2}vw, ${bubbleY2}vh)`
        },
        {
          transform: `translate(${bubbleX}vw, ${bubbleY}vh)`
        },
        {
          transform: `translate(${bubbleX2}vw, -100vh)`
        }
      ]
      const bubbleMovingHorizonal = [{
          transform: `translate(${bubbleY2}vw, ${bubbleX2}vh)`
        },
        {
          transform: `translate(${bubbleY}vw, ${bubbleX}vh)`
        },
        {
          transform: `translate(${bubbleX}vw, -100vh)`
        }
      ]

      const bubbleTiming = {
        duration: 5000,
        // fill: 'forwards',
        iterations: Infinity
      }

      // *bubble 식별
      const bubbleItem = Array.from(waterBg.children);
      console.log(bubbleItem);
      bubbleItem.map(elem => {
        // *크기 무작위로 만들어내기
        // ?크기가 자꾸 틀어진다, 가로 세로 값이 똑같아야 타원이 아닌 원이 나올 것
        // 각각이 아니라 변수에 랜덤 숫자를 담아서 사용해줘야 둘 다 같은 수를 적용해 사이즈가 타원이 되지 않음
        let bubbleSize = `${randomNum(5, 20)}`;
        setBubble(elem, `${bubbleSize}px`, `${bubbleSize}px`, '100%');
        elem.style.backgroundColor = '#bad8f2';
        // elem.animate();
        setPosition(elem, 'absolute', '0', '0', '0', '0');
      });
      bubbleItem.forEach((elem, index) => {
        // ?테스트 했던 것보다 위치가 잘 안 움직여진다, 계속 바닥에만 물방울이 가로로 움직여지는 부분 해결하기 
        elem.style.border = '5px solid #fff';
        if (index % 2 === 0) {
          elem.style.opacity = 0.1;
          elem.animate(bubbleMoving, bubbleTiming);
        } else if (index % 3 === 0) {
          elem.style.opacity = 0.2;
          elem.animate(bubbleMovingReverse, bubbleTiming);
        } else {
          elem.style.opacity = 0.3;
          elem.animate(bubbleMovingHorizonal, bubbleTiming);
        }
      });
      if (waterBg.children.length < 30) {
        clearInterval(bubbleGun);
      }

    }, 5000);

  // ?물방울 좌표 알아보기위해서 만듬
  window.addEventListener('click', (event) => {
    console.dir(window);
    console.log(event.clientX, event.clientY);
  })
}

export default makeWaterBg;