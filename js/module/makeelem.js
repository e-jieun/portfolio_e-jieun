const makeElem = (tagName, id = '', textContent = '') => {
  const makeElem = `<${tagName} id="${id}">${textContent}</${tagName}>`;
  return makeElem;
}

export default makeElem;