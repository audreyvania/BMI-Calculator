function validateForm() {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let result = document.querySelector("#result");

  let hasil = (weight / (height / 100) ** 2).toPrecision(3);

  if (hasil < 18.5) {
    result.innerHTML = "Your BMI is" + " " + "<b>" + hasil + "</b>" + " " +
      "which means You are <b> Underweight </b>";

      let normalWeight = (18.5 * (height / 100) ** 2).toFixed(1);
      result.innerHTML +=
        "<br/>" + "<br/>" +
        "Normal weight for your height is between " +
        normalWeight +
        " kg and " +
        (24.9 * (height / 100) ** 2).toFixed(1) +
        " kg.";
  } 
  
  else if (hasil >= 18.5 && hasil <= 24.9) {
    result.innerHTML = "Your BMI is" + " " + "<b>" + hasil + "</b>" + " " +
      "which means You are <b> Normal </b>";

      let normalWeight = (18.5 * (height / 100) ** 2).toFixed(1);
      result.innerHTML +=
        "<br/>" + "<br/>" +
        "Normal weight for your height is between " +
        normalWeight +
        " kg and " +
        (24.9 * (height / 100) ** 2).toFixed(1) +
        " kg.";
  } 
  
  else if (hasil >= 25 && hasil <= 29.9) {
    result.innerHTML = "Your BMI is" + " " + "<b>" + hasil + "</b>" + " " +
      "which means You are <b> Overweight </b>";
    
      let normalWeight = (18.5 * (height / 100) ** 2).toFixed(1);
      result.innerHTML +=
        "<br/>" + "<br/>" +
        "Normal weight for your height is between " +
        normalWeight +
        " kg and " +
        (24.9 * (height / 100) ** 2).toFixed(1) +
        " kg.";
  } 
  
  else if (hasil >= 30) {
    result.innerHTML = "Your BMI is" + " " + "<b>" + hasil + "</b>" + " " +
      "which means You are <b> Obesity </b>";

      let normalWeight = (18.5 * (height / 100) ** 2).toFixed(1);
      result.innerHTML +=
        "<br/>" + "<br/>" +
        "Normal weight for your height is between " +
        normalWeight +
        " kg and " +
        (24.9 * (height / 100) ** 2).toFixed(1) +
        " kg.";
  }

  // Mengatur ulang nilai input menjadi kosong
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";

}
