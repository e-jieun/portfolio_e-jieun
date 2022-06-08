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
projectOverview.style.gridTemplateAreas = '1fr 2fr';

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


// *title이 뜨는 화면
// *overviewCon[0]
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
// *text fade-in
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
// *menuCon
// *overviewCon[1]
const overviewMenuCon = document.getElementById('menu-con');
console.log(overviewMenuCon);
// overviewMenuCon.style.background = 'url(./img/wave.png)';
overviewMenuCon.setAttribute('style', `background: url(./img/wave.png);
      background-size: cover;
      background-repeat: no-repeat; background-position: bottom;`);
setDisplay(overviewMenuCon, 'flex', 'center', 'center');
overviewMenuCon.style.gridTemplateColumns = '1fr 5fr';


// 2. 개요 텍스트에 마우스 오버할 때마다 색이 변경되어야 함
overviewMenuCon.innerHTML = `
<div id="bar-con"></div>
<div id="projectname-con"></div>`;

console.log(overviewMenuCon.children);
// 자식요소 innerHTML로 부여해준 부분을 식별해주기 -> 배열로 활용할 수 있도록
const overviewMenuChild = Array.from(overviewMenuCon.children);
console.log(overviewMenuChild);
const menuItemArr = [];
const menuItem = ['<div id="line"></div>', '<div id="bg-circle"></div>'];
// menuItemArr에 각각 넣어줄 태그를 배열 안에 넣어야 하고
// ul 1 라인 1개 -> 가장 밑에 배경으로 깔아두고
// ul 2 동그라미 6개 -> 기본 동그라미 위치
// ul 3 동그라미 1개 -> 선택할 부분 위치
menuItem.forEach((elem) => {
  menuItemArr.push(elem);
});
console.log(menuItemArr);

overviewMenuChild[0].innerHTML = menuItemArr.join('');
// 자식요소로 잘 붙었다
console.log(overviewMenuChild[0]);

// ul id 붙여주기
const barCon = document.getElementById('bar-con');
setSize(barCon, '', '45vmax');
// barCon.classList.add('border-bk');
setPosition(barCon, 'relative', '2vh', '', '5vh');
setDisplay(barCon, 'flex', 'center', 'center');

const selectingLine = Array.from(barCon.children);
console.log(selectingLine);
selectingLine.forEach((elem, index) => {
  setSize(elem, 'inherit', 'inherit');
  setPosition(elem, 'absolute');
  // elem.classList.add('border-bk');
  // if(elem[index].id === 'line'){
  //   console.log('hi');
  // }
});

const line = document.getElementById('line');

setSize(line, '1px', 'inherit');
line.style.backgroundColor = '#fff';
line.classList.remove('border-bk');

// #bg-circle
const bgCircle = document.getElementById('bg-circle');
setDisplay(bgCircle, 'flex', 'center', 'space-between', 'column');

// bgCircle의 자식요소를 생성해줄 부분
const bgCircleArr = [];
const div = '<div data-circle="1"></div>';
for (let i = 0; i < 5; i++) {
  bgCircleArr.push(div);
  bgCircle.innerHTML = bgCircleArr.join('');
}

const bgCircleItem = Array.from(bgCircle.children);
console.log(bgCircleItem);
bgCircleItem.forEach(elem => {
  setSize(elem, '12px', '12px');
  elem.style.backgroundColor = '#fff';
  elem.classList.add('circle');
});

// *projectname-con
const projectnameCon = document.getElementById('projectname-con');
console.log(projectnameCon);
// projectnameCon.classList.add('border-bk');
setPosition(projectnameCon, 'relative', '0', '', '', '');
setSize(projectnameCon, '40vmax', '45vmax');
setDisplay(projectnameCon, 'grid', 'center', 'center');
projectnameCon.style.rowGap = '8vh';
projectnameCon.style.opacity = 0;
window.addEventListener('load', () => {
  const projectnameConVisible = setTimeout(() => {
    projectnameCon.style.opacity = 1;
    projectnameCon.style.top = '3vh';
    projectnameCon.style.transition = '1s';
  }, 700);
});

// *자식요소로 덧붙여주기
const projectnameArr = [];
const projectname = ['<a></a>', '<a href="#project-1">보라도라</a>', '<a href="#project-2">가상 문구류</a>', '<a href="#project-3">더 발룬티어스</a>', '<a href="#project-4">토이 프로젝트</a>'];
projectname.forEach(elem => {
  projectnameArr.push(elem);
  projectnameCon.innerHTML = projectnameArr.join('');
});

// *projectnameItem
const projectnameItem = Array.from(projectnameCon.children);

projectnameItem.forEach((elem, index) => {
  // elem.style.textDecorationStyle = 'wavy';
});

// *mouseover event 마우스 오버한 부분만 변할 수 있도록
document.documentElement.style.scrollBehavior = 'smooth';
window.addEventListener('hashchange', (event) => {
  // *이제 여기서 텍스트 위에 올리면 동그라미 위치 색이 변하도록 해주면 될 것 같은데...
  // *동그라미는 bgCircleItem로 배열로 식별되어있음
  // *텍스트는 projectnameItem으로 식별이 돼있음
  const urlTest = location.href;
  bgCircleItem.forEach(elem => {
    elem.style.backgroundColor = '#ff0000';
    // ?조건문을 작성하면 되지 않을까? => 이 둘의 인덱스는 같다, 
    // ?빨간색으로 변하는 건 완성이 됐다, 그런데 특정 글씨를 클릭해서 동일선상에 있는 위치를 선택해줄 때는 특정 알고리즘을 적용해야할 것
    // 똑같이 선택했을 때 각 영역에 맞도록 색이 변하도록 변화하도록 해주기
    

  })
});