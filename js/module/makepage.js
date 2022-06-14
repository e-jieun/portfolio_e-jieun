// todo: 몇번이고 자식을 생성해줄 수 있도록 하는 함수를 만들어주면 좋을 것 같음
// todo: 매번 재할당이 되는 구조로 했어서 문제가 있었다 
const makePage = (parent, tagName, id) => {
  const elem = document.createElement(tagName);
  elem.id = id;
  parent.appendChild(elem);
}

export default makePage;