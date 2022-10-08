function init() {
  document.querySelectorAll("input[type=number]").forEach(function (input) {
    generateStepButtons(input)
  })
}

function generateStepButtons(input) {
  let stepDownElement = document.createElement("span");
  let stepUpElement = document.createElement("span");

  stepDownElement.className = "step step--down";
  stepDownElement.innerHTML = "-"
  stepDownElement.addEventListener("click", function () {
    input.stepDown();
  })

  stepUpElement.className = "step step--up";
  stepUpElement.innerHTML = "+"
  stepUpElement.addEventListener("click", function () {
    input.stepUp();
  })

  input.insertAdjacentElement("beforebegin", stepDownElement);
  input.insertAdjacentElement("afterend", stepUpElement);
}

module.exports.init = init