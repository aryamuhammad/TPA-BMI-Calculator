const weightInput = document.querySelector("#input-weight");
const heightInput = document.querySelector("#input-height");
const button = document.querySelector("button");
let yourBmi = document.querySelector(".bmi");
let result = document.querySelector(".result");
function BMIcalc() {
  let weight = parseInt(weightInput.value);
  let height = parseInt(heightInput.value);
  let BMI = weight / (height / 100) ** 2;
  return BMI.toFixed(1);
}

function getResult(BMI) {
  BMI = BMIcalc();
  if (BMI <= 18.5) {
    return "Underweight";
  } else if (BMI > 18.5 && BMI <= 24.9) {
    return "Normal";
  } else if (BMI > 24.9 && BMI <= 29.9) {
    return "Overweight";
  } else if (BMI > 29.9) {
    return "Obesity";
  } else {
    return "Error";
  }
}

button.addEventListener("click", function () {
  yourBmi.innerHTML = BMIcalc();
  result.innerHTML = getResult();
  weightInput.value = "";
  heightInput.value = "";
});
