import makePage from "./module/makepage.js";

const root = document.getElementById('root');
// *03-menu-overview page 만들어 줄 부분
makePage(root, 'section', 'menu-overview');
console.log(root.children);