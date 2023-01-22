import { navbar } from "./components/navbar.js";
console.log('navbar',navbar);

let navbar_div=document.querySelector('.nav-container')
navbar_div.innerHTML=navbar()