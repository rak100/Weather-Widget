// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


function getInfo() {
    const userInput = document.getElementById("userinput");
    const chosenCity = document.getElementById("chosencity");
    chosenCity.innerHTML = "--" + userInput.value + "--"; // new city name input

fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q='+userInput.value+'&appid=9c8d3773eec833de027bb5eb6046e6fe"
)
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Temp").innerHTML =
                "Temp:" + Number(data.list[i].main.temp - 296.15).toFixed(1) + "°";
        }
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Wind").innerHTML =
              "Wind:" +
              Number(data.list[i].main.wind.speed)
        }
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Humidity").innerHTML =
              "Humidity:" +
              Number(data.list[i].main.humidity)
        }
        // start from for loop for icons
    })};
    // .catch(err => alert("Something went wrong"))
    // const days = 'M'