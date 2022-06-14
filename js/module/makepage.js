function makePage(tagName, id){
  // todo: 몇번이고 자식을 생성해줄 수 있도록 하는 함수를 만들어주면 좋을 것 같음
  const makeElem = `<${tagName} id="${id}"></${tagName}>`;
  return makeElem;
}

export default makePage;