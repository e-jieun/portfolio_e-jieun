// variable declaration
let hun = 100;
const colorObj = {
  colorBk: `#000`,
  colorC4: `#c4c4c4`,
  color33: `#333`,
  colorNa: `#3773A5`,
  colorFf: `#fff`,
  colorSb: `rgba(186,216,242,1.0)`
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

// *shaka page
const shaka = document.getElementById('shaka');
console.log(shaka);
setSize(shaka, `${hun}vw`, `${hun}vh`);
setDisplay(shaka, `grid`, `center`, `center`);
setBgColor(shaka, `${colorObj.colorSb}`);
shaka.style.color = `${colorObj.colorFf}`;

// *shaka.chilren
console.log(shaka.children);
// 1. 모든 컨테이너의 아이템 가운데 정렬
for(let i = 0; i < shaka.children.length; i++){
  setDisplay(shaka.children[i], `grid`);
  setSize(shaka.children[i], `inherit`, `${hun/2}%`);
}
// *shakahand
const shakaHand = document.getElementById('shakahand');
// *footertext
const footerText = document.getElementById('footertext');
// *footerText style
setDisplay(footerText, `grid`, `center`, `center`);
// *footerText.children에 공통 적용할 부분
console.log(footerText.children);
for(let i = 0; i < footerText.children.length; i++){
  setDisplay(footerText.children[i], `grid`);
  footerText.children[i].style.textAlign = `center`;
  // 2. list-style-type: none;
  footerText.children[i].style.listStyleType = `none`;
}

// *#footericon => icon을 감싸고 있는 컨테이너
const footerIcon = document.querySelector('#footericon');
console.log(footerIcon);
setDisplay(footerIcon, `flex`, `center`, `space-evenly`);

// interaction 1. 손 마우스오버 이벤트 애니메이션