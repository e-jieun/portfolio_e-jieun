function makeBubble(number, elem, contents = '') {
  let string = '';
  for (let i = 0; i < number; i++) {
    string += `<${elem}>${contents}</${elem}>`
  }
  return string;
}

export default makeBubble;