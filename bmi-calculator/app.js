function calculateBMI(){

  let height =
    document.getElementById("height").value;

  let weight =
    document.getElementById("weight").value;

  if(height === "" || weight === ""){
    return;
  }

  height = height / 100;

  let bmi =
    (weight / (height * height)).toFixed(1);

  let status = "";

  if(bmi < 18.5){
    status = "Underweight";
  }
  else if(bmi < 25){
    status = "Normal";
  }
  else{
    status = "Overweight";
  }

  document.getElementById("result").innerHTML =
    `
    <h2>BMI: ${bmi}</h2>
    <p>${status}</p>
    `;
}