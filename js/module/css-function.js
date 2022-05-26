export function displaySet(elem, display, align = 'center', justify ='center', direction = 'row'){
  if(typeof elem == 'object'){
    elem.style.display = display;
    elem.style.alignItems = align;
    elem.style.justifyContent = justify;
    elem.style.flexDirection = direction;
  }
}