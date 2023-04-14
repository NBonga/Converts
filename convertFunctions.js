function convertPoundsToKilograms(pounds) {
    let kilograms = pounds * 0.453592;
    return kilograms;
  }

  //const convertPoundsToKilograms = (pounds) => {
  //  return pounds * 0.453592;
 // }

function convertInchesToCentimeters(inches) {
    let centimeters = inches * 2.54;
    return centimeters;
}

//const convertInchesToCentimeters = (inches) =>{
//    return inches * 2.54;
//}

function convertFahrenheitToCelsius(fahrenheit) {
    let celsius = fahrenheit - 32 * 5/9;
    return celsius;
}

//const convertFahrenheitToCelsius = (fahrenheit) => {
//    return fahrenheit - 32 * 5/9;
//}

function convertFeetToMeters(feet) {
     let meters = feet * 0.3048;
     return meters;
}

//const convertFeetToMeters = (feet) => {
//    return feet * 0.3048;
//}

console.log(convertPoundsToKilograms(6));
console.log(convertInchesToCentimeters(6));
console.log(convertFahrenheitToCelsius(7));
console.log(convertFeetToMeters(4));
