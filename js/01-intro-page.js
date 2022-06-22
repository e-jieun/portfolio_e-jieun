import makePage from "./module/makepage.js";
// import makeElem from "./module/makeelem.js";
import {
  setSize,
  setDisplay,
  setPosition,
  setBgColor
} from "./module/css-function.js";
import hun from "./module/reset.js";
import makeElem from "./module/makeelem.js";
import colorObj from "./module/color.js";
import makeWaterBg from "./00-water-bg.js";

const root = document.getElementById('root');

// *01-intro-page 만들어 줄 부분
makePage(root, 'section', 'intro');
// console.log(root.children);

// *introPage style
const introPage = document.getElementById('intro');
// console.log(introPage); //잘 생성됨

setSize(introPage, `${hun}vw`, `${hun}vh`);
// introPage.classList.add('border-bk');
setDisplay(introPage, 'flex', 'center', 'space-between', 'column');
introPage.style.overflow = 'hidden';

// introPage.style.gridTemplateRows = '1fr 1fr';

// todo: introPage의 자식으로 두개의 div를 자식요소로 붙여줘야 함
// *menuCon
introPage.innerHTML = `${makeElem('div', 'menu-con')}${makeElem('div', 'wave-con')}`;
const menuCon = introPage.firstElementChild;

// *menuCon children
menuCon.innerHTML = `${makeElem('div')}${makeElem('div')}`;
setDisplay(menuCon, 'flex', 'flex-end', 'flex-start');
setPosition(menuCon, 'relative', '30vh', '', '10vh');

const menuConText = menuCon.children;
const menuConTextArr = Array.from(menuConText);
menuCon.style.opacity = 0;
// console.log(menuConTextArr);

// !자바스크립트에서는 백슬래시를 사용하고 특수문자를 사용할 수가 있다, html과는 다른 방식, c언어 방식인건가
const textArr = ['Shaka!', `Let\'s Start Surf!`];
menuConTextArr.forEach((elem, index) => {
  // console.log(elem);
  // elem.classList.add('border-bk');
  // todo: shaka img 태그 추가할 부분
  if (index === 0) {
    elem.innerHTML = makeElem('img', 'shaka');
    const shaka = document.getElementById('shaka');
    shaka.src = './img/svg/shakahand.svg';
    setSize(elem, '10vmax', '10vmax');
    // todo: 인사말 text 태그 추가할 부분
  } else {
    makePage(elem, 'div');
    makePage(elem, 'div');
    setDisplay(elem, 'grid');

    const textChild = Array.from(elem.children);
    textChild.forEach((elem, index) => {
      index === 0 ? elem.textContent = textArr[index] : elem.textContent = textArr[index];
      elem.style.fontSize = `2rem`;
      elem.style.color = `${colorObj.colorNa}`;
    });
  }
});

// *waveCon
const waveCon = introPage.lastElementChild;

// todo: 어느 영역인지 보이도록 해주기
// console.log(introPage.children);
const introPageChild = Array.from(introPage.children);
// console.log(introPageChild);
introPageChild.forEach(elem => {
  // elem.classList.toggle('border-bk');
  setSize(elem, 'inherit', '50%');
})

// todo: waveCon의 자식요소로 .circle, wavwBg가 필요
waveCon.innerHTML = `${makeElem('div')}${makeElem('img', 'wave-bg')}`;
setDisplay(waveCon, 'flex', 'center', 'end', 'column');

// *circle
const introCircle = waveCon.firstElementChild;
setBgColor(introCircle, `${colorObj.colorSb}`);
setSize(introCircle, `${hun/2}px`, `${hun/2}px`);
// todo: 동그라미 움직여줄 부분
introCircle.classList.add('circle');
// *circle의 첫 시작 포인트
setPosition(introCircle, 'absolute', '', '15vh', '', '15vh');
// 바다 아래로 내려가도록 해주는 부분
introCircle.style.zIndex = -1;

// todo: animate()를 활용해서 움직임 넣어주기
// ?움직임이 자연스럽지가 않음
// 1. 움직임을 넣어줄 부분을 만들어주고
const ballMoving = [{
    transform: `translate(0, 0)`
  },
  {
    transform: `translate(-60vw, 13vh)`
  },
  {
    transform: `translate(-60vw, 5vh)`
  }
];
const diveinBall = [{
    transform: `translate(-60vw, 5vh)`
  },
  {
    transform: `translate(-60vw, 20vh)`
  }
];
// 2. 타이밍을 제어할 부분을 만들어 준다
const ballTiming = {
  duration: 2000,
  // ?이걸 실행한 다음에 그 위치에 멈추도록 하는 방법은 없을까...?
  // !마지막 실행위치에 고정되게 해주는 방법
  // !css에서는 animation-fill-mode: forwards, js에서는 fill 속성을 forwards로 실행하면 된다
  fill: `forwards`
}
const diving = {
  duration: 500,
  fill: `forwards`,
  easing: `ease-out`
}
// 3. 식별한 부분에 이벤트를 달고 위에서 만들어 준 것을 매개변수로 넣어준다
// mouseover일 때마다 계속 반복되서 값을 설정해줌
let mouseoverValue = 0;
window.addEventListener('mouseover', function () {
  mouseoverValue++;
  // ?공 움직임이 실행되고 나서 ball 모양이 특정 지점에 도달한 다음에 나타나도록 하기 위해서
  // !promise()를 활용해보자
  // *동그라미가 미끄러져 내려가는 부분
  if (mouseoverValue === 1) {
    const first = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          introCircle.animate(ballMoving, ballTiming);
          resolve();
        }, 1000);
      })
    }
    // promise를 리턴
    // todo: 이 부분은 오목한 부분에 도달했을 때 적용해주기, 오목한 부분에 도달하면 글씨도 적용해주기
    // *동그라미가 특정 지점에 도달했을 때 텍스트가 나타나도록 해주는 부분
    first().then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            menuCon.style.opacity = 1;
            menuCon.style.transition = `1s`;
            resolve();
          }, 1000);
        })
      })
      // *동그라미가 물로 다이빙
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            introCircle.animate(diveinBall, diving);
            menuCon.style.opacity = 0;
            menuCon.style.transition = `1s`;
            resolve();
          }, 1000);
        })
      })
      // *동그라미가 사라지도록 해주는 부분
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            introCircle.style.opacity = 0;
            resolve();
          }, 500);
        })
      })
      // 이 행동이 끝나고 옮겨주면 좋겠는데
      // 아래 페이지로 바로 이동
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            // console.log(this);
            introPage.addEventListener('click', () => {
              // ?계속 이 부분에서 걸려서 다음으로 스크롤이 되지 않음
              // !변수로 해결
              let scrollValue = true;
              if (scrollValue === true) {
                window.scrollTo({

                  top: window.innerHeight,
                  behavior: `smooth`
                })
                // root의 사이즈가 자식요소에 맞춰지도로 빈 값을 넣어줌
                setSize(root, '', '');
                // 배경을 보이도록 해줌
                makeWaterBg()
                scrollValue = false;
              }
              resolve();
            }, 0);
          });
        })
      })
  }
});

// *waveBg
const waveBg = waveCon.lastElementChild;
// console.log(waveBg);
waveBg.src = "./img/svg/wave.svg";