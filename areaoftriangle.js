const inputs = document.querySelectorAll(".length-input");
const checkareabtn = document.querySelector("#check-area-btn");
const output = document.querySelector("#output");

function calculatemultiplicationOfAngles(length, base, angle) {
  const multiplicationOfAngles = length * base * angle;

  return multiplicationOfAngles;
}

function checkarea() {
  const multiplicationOfAngles = calculatemultiplicationOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  output.innerText =
    "the area of the given triangle" + multiplicationOfAngles + " sqcm.";
}
checkareabtn.addEventListener("click", checkarea);
