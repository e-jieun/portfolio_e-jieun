function setBubble(elem, width, height, radius = '100%'){
  elem.setAttribute('style',`width: ${width}; height: ${height}; border-radius: ${radius};`);
}

export default setBubble;