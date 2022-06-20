const randomNum = (min = 0, max) => {
  // ?Math.floor(): 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환한다
  return Math.floor(Math.random() * (max - min) + min);
}
export default randomNum;