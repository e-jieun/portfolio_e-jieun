const returnPercent = (elem, total, current) => {
  // 현재의 값의 퍼센트를 출력해주는 공식
  let result = (current/total)*100;
  // 계산된 퍼센트를 리턴해준다
  return result;
}

export default returnPercent;