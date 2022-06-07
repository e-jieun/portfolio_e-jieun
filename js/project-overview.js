import colorObj from "./module/color.js";
import {
  setBgColor,
  setDisplay,
  setPosition,
  setSize
} from "./module/css-function.js";
const projectOverview = document.getElementById('project-overview');
console.log(projectOverview);

// 우선 화면 크기 이전에 문서에서 정해준대로
projectOverview.style.width = '100vw';
projectOverview.style.height = '100vh';
projectOverview.style.display = 'grid';
projectOverview.style.gridTemplateRows = '1fr 1fr';

// 2개의 컨테이너를 생성해줘야 함 projectOverview의 자식요소로 우선 두개의 자식요소로 넣어주긴 했다
projectOverview.innerHTML = `<div></div><div></div>`;
const overviewCon = projectOverview.children;
console.log(overviewCon);
// push로 컨테이너 안에 넣어줄 자식요소의 태그를 배열 값을 문자열로 작성해서 넣어주고, 그 다음에 해당하는 부분에 할당을 해준다
const overviewConArr = Array.from(overviewCon);
console.log(overviewConArr);
const overviewConChild = [];
overviewConArr.forEach((elem, index) => {
  overviewConChild.push('<div></div>');
  elem.innerHTML = overviewConChild[index];
  console.log(elem);
  // elem.classList.add('border-bk');
  if (index === 0) {
    overviewConArr[0].id = 'text-con';
  } else {
    overviewConArr[1].id = 'menu-con';
  }
});


// title이 뜨는 화면
// overviewCon[0]
const overviewTextCon = document.getElementById('text-con');
console.log(overviewTextCon);
overviewTextCon.innerHTML = '<h1>Project</h1>';
overviewTextCon.setAttribute('style', `width: 100vw; display: flex; align-items: center; justify-content: center;`);

// overviewCon[0]>h1
const textProject = overviewTextCon.firstElementChild;
console.log(textProject);
textProject.style.opacity = 0;
setPosition(textProject, 'relative', '10vh');

// 1. 프로젝트라는 텍스트 상자가 로딩되고 몇 초 후에 올라와야 함
// 1-1. 로딩되면 실행이 될 이벤트 핸들러를 윈도우에 달아준다
// text fade-in
window.addEventListener('load', () => {
  // 1-2. 몇 초를 설정한 setTimeout을 실행되도록 해준다
  let textVisible = setTimeout(() => {
    // console.log('view text'); // 작동함
    textProject.style.opacity = 1;
    textProject.style.top = 0;
    textProject.style.transition = '1s';
  }, 500);
})





// 프로젝트 개요 화면
// menuCon
// overviewCon[1]
const overviewMenuCon = document.getElementById('menu-con');
console.log(overviewMenuCon);
// overviewMenuCon.style.background = 'url(./img/wave.png)';
overviewMenuCon.setAttribute('style', `background: url(./img/wave.png);
      background-size: cover;
      background-repeat: no-repeat; background-position: bottom; `);

// 2. 개요 텍스트에 마우스 오버할 때마다 색이 변경되어야 함
overviewMenuCon.innerHTML = `
<div id="bar-con"></div>
<div id="projectname-con"></div>`;

console.log(overviewMenuCon.children);
// 자식요소 innerHTML로 부여해준 부분을 식별해주기 -> 배열로 활용할 수 있도록
const overviewMenuChild = Array.from(overviewMenuCon.children);
console.log(overviewMenuChild);
const menuItemArr = [];
const menuItem = ['<ul></ul>', '<ul></ul>', '<ul></ul>'];
// menuItemArr에 각각 넣어줄 태그를 배열 안에 넣어야 하고
// ul 1 라인 1개 -> 가장 밑에 배경으로 깔아두고
// ul 2 동그라미 6개 -> 기본 동그라미 위치
// ul 3 동그라미 1개 -> 선택할 부분 위치
menuItem.forEach((elem) => {
  menuItemArr.push(elem);
});
menuItemArr.unshift('<div>');
menuItemArr.push('</div>');
console.log(menuItemArr);

overviewMenuChild[0].innerHTML = menuItemArr.join('');
// 자식요소로 잘 붙었다
console.log(overviewMenuChild[0]);
// ul id 붙여주기

// 3. 클릭하면 해당 페이지로 연결되어야 함, 혹은 볼 수 있어야 한다