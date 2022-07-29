const aTarget = Array.from(document.getElementsByTagName('a'));
console.log(aTarget);
// *새 창으로 링크 열리도록 해줌
aTarget.map(elem => {
  // *hashchange 적용하지 않은 부분만 적용해줘야 함
  if(!elem.href.includes('#')){
    elem.target = '_blank';
  }
});