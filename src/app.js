/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excuse = generateExcuse();
  document.querySelector("#excuse").innerHTML = excuse;
};

function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  return (
    randElement(who) +
    " " +
    randElement(action) +
    " " +
    randElement(what) +
    " " +
    randElement(when)
  );
}

function randElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
