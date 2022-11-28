import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

/*


// NAVIGATION -----------------

const pages = document.getElementById("pages");

var pos = pages.dataset.pos;
const posmin = 0;
const posmax = 3;

const page_list = ["home", "about", "portfolio", "contact"];

const arrowRight = document.getElementById("nav-right");
const arrowLeft = document.getElementById("nav-left");

const goTop = () => {
  this.location.href = '#anchor';
}

const handleIncrement = () => {
  if (pos < posmax) {
    pos++;
    goTop();
    setTimeout(function() {setHeight()}, 200);
  }
  checkRight();
  checkLeft();
  
  pages.setAttribute("data-pos", pos);
  pages.style.transform = `translateX(${-151 * pos}%)`;
};

const handleDecrement = () => {
  if (pos > posmin) {
    pos--;
    goTop();
    setTimeout(function() {setHeight()}, 200);
  }
  checkLeft();
  checkRight();
  
  pages.setAttribute("data-pos", pos);
  pages.style.transform = `translateX(${-151 * pos}%)`;
};

const checkLeft = () => {
  if (pos <= posmin) {
    arrowLeft.style.opacity = 0;
    arrowLeft.style.cursor = "auto";
  } else {
    arrowLeft.style.opacity = 0.8;
    arrowLeft.style.cursor = "pointer";
  }
}

const checkRight = () => {
  if (pos === posmax) {
    arrowRight.style.opacity = 0;
    arrowRight.style.cursor = "auto";
  } else {
    arrowRight.style.opacity = 0.8;
    arrowRight.style.cursor = "pointer";
  }
}

const setHeight = () => {
  let i=0;
  for (i=0; i < posmax+1; i++) {
    let elementId = `${page_list[i]}`;
    console.log(elementId);
    let element = document.getElementById(elementId);
    if (i !== pos) {
      element.style.overflowY = "hidden";
      element.style.opacity = 0;
    } else {
      element.style.overflowY = "visible";
      element.style.opacity = 1;
    }
  }
}

  
arrowRight.addEventListener("click", handleIncrement);
arrowRight.addEventListener("touchend", handleIncrement);  
arrowLeft.addEventListener("click", handleDecrement);
arrowLeft.addEventListener("touchend", handleDecrement);

checkLeft();
checkRight();
setHeight();

pages.style.transform = `translateX(${-151 * pos}%)`;

// tool list generation for projects

//var tool_elems = document.getElementsByClassName("tools");

// actually do this when port to react :D

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


*/