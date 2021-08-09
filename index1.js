const div1 = document.createElement("div");

const span1 = document.createElement("span");
const button = document.querySelector("button");
div1.className = "div1";

document.body.appendChild(div1);

button.addEventListener('click', () => {
  const div2 = document.createElement("div");
  if (div2) {

  } else { }
  div2.className = "div2";
  document.body.appendChild(div2);
});