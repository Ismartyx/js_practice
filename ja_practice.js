console.log("im in js file");

var x = myF(5, 6);

function myF(a, b) {
    return a * b ;
  }

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  var text = "The temperature is " + toCelsius(77) + " Celsius";