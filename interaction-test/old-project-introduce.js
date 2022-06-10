import {
  getAppendName,
  setBgColor,
  setDisplay,
  setPosition,
  setSize
} from "../js/module/css-function.js";

function img() {
  return `<img>`;
}

// *전체 페이지
const projOverview = document.getElementById('project-overview');
// !id를 해쉬를 통해 페이지를 이동하도록 해줬기 때문에 class로 바꿔주지 못한다
const projOne = document.getElementsByClassName('project');
console.log(projOne);
const projectArr = Array.from(projOne);

// ?project-overview의 다음 태그들을 클래스 네임으로 불러와서 잘 적용했지만 문제는 각각 위의 태그에서 실행되고 난다음에 그 다음 걸 실행하는 부분이 안된다는 거다....
projectArr.forEach(elem => {
  setSize(elem, '100vw', '100vh');

  // *전체 페이지 아래 두개의 섹션
  const projOneChild = Array.from(elem.children);

  projOneChild.forEach(elem => {
    elem.setAttribute('style', 'width: inherit; height: 50%;');
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

  // ?lastchild의 위치가 윈도우창의 50%로 오면 거기서 멈추라고 하면 될 것 같은데....
  // ?지금 보니까 폰트의 위치 조절도 필요해보인다

  // ? wheel event가 아니라 그냥 처음부터 애니메이션을 주는 편이 나을 수도...
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




  // *popUp
  // ?여기에 popup을 만들어주려면 어떻게 하는게 좋을까?
  // todo: popup을 서핑보드 부분에 클릭 이벤트를 걸어서 나타나도록 해준다
  surfingBoard.addEventListener('click', 
  () => {
    console.log('hi');
  })
  // 
});