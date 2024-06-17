import _ from "lodash";
import "./style.css";
import data from "./data/data.xml";
import notes from "./data/data.csv";
// import Icon from "./images/icon.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;
  console.log(data);
  console.log(notes);

  // element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
