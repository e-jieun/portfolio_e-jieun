import makePage from "./module/makepage.js";

// *02-introduce-myself page 만들어 줄 부분
const root = document.getElementById('root');
makePage(root, 'section', 'introduce-myself');
console.log(root.children);