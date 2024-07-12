function convert() {
  let inputTemp = parseFloat(document.getElementById('inputTemp').value);
  let fromUnit = document.getElementById('selectFrom').value;
  let toUnit = document.getElementById('selectTo').value;
  let result;

  if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      result = (inputTemp - 32) * 5/9;
    } else if (toUnit === 'kelvin') {
      result = (inputTemp - 32) * 5/9 + 273.15;
    } else {
      result = inputTemp;
    }
  } else if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      result = (inputTemp * 9/5) + 32;
    } else if (toUnit === 'kelvin') {
      result = inputTemp + 273.15;
    } else {
      result = inputTemp;
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'fahrenheit') {
      result = (inputTemp - 273.15) * 9/5 + 32;
    } else if (toUnit === 'celsius') {
      result = inputTemp - 273.15;
    } else {
      result = inputTemp;
    }
  }

  document.getElementById('result').innerHTML = `${inputTemp} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
}
