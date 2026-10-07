function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a temperature.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;
    } 
    else if (unit === "fahrenheit") {
        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } 
    else {
        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    result.innerHTML =
        `Celsius: ${celsius.toFixed(2)} °C<br>
         Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
         Kelvin: ${kelvin.toFixed(2)} K`;
}