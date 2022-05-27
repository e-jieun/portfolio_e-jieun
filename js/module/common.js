// document.body
document.body.setAttribute(`style`,`margin: 0; padding: 0;`);

const root = document.getElementById('root');
console.log(root);
// 가로 overflow를 컨트롤
root.style.overflowX = `hidden`;