const makeElem = (tagName, id = '') => {
  const makeElem = `<${tagName} id="${id}"></${tagName}>`;
  return makeElem;
}

export default makeElem;