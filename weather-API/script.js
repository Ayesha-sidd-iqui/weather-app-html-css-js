
// function updateTime() {
//     const now = new Date();

//     document.getElementById("time").textContent =
//         now.toLocaleTimeString();
// }

// updateTime();

// setInterval(updateTime, 1000);


// const today = new Date();

// document.getElementById("date").textContent =
//   today.toLocaleDateString();








// let API_KEY = "32584deaf7da492db1d132449251209";


// let input = document.querySelector("#search-input");
// let button = document.querySelector("#search-btn");

// button.addEventListener("click", () => {

//   let city = input.value;

//   let URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
// fetch(URL)
//   .then((response) => {
    
//     if (!response.ok) {
//       document.getElementById("weather-img").src = "404.jpg";
//       return;
//     }

//     return response.json();
//   })
//   .then((data) => {

//     if (!data) return;

//     console.log(data);

//       let condition = document.getElementById("condition");
//       condition.textContent = data.current.condition.text;

//       document.getElementById("city").textContent =
//         data.location.name + ", " + data.location.country;

//       document.getElementById("feels").textContent =
//         "Feels like " + data.current.feelslike_c + "°C";

//       document.getElementById("temperature").textContent =
//         data.current.temp_c + "°C";

//       document.getElementById("feels-temp").textContent =
//         data.current.feelslike_c + "°C";

//       document.getElementById("humidity").textContent =
//         data.current.humidity + "%";

//       document.getElementById("wind").textContent =
//         data.current.wind_kph + " km/h";

// let weather = data.current.condition.text.toLowerCase();

// if (weather.includes("clear")) {
//   document.getElementById("weather-img").src = "clear.png";

// } else if (weather.includes("rain")) {
//   document.getElementById("weather-img").src = "rainy.jpg";

// } else if (weather.includes("snow")) {
//   document.getElementById("weather-img").src = "snow.jpg";

// } else if (
//   weather.includes("cloud") ||
//   weather.includes("overcast")
// ) {
//   document.getElementById("weather-img").src = "cloud.jpg";

// } else if (
//   weather.includes("sunny")
// ) {
//   document.getElementById("weather-img").src = "sunny.webp";

// }
 
// else{
//   document.getElementById("weather-img").src =
//     "https:" + data.current.condition.icon;}

// });

//     });


function updateTime() {
  const now = new Date();

  document.getElementById("time").textContent =
    now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
}

updateTime();
setInterval(updateTime, 1000);


const today = new Date();

document.getElementById("date").textContent =
  today.toLocaleDateString();

let API_KEY = "32584deaf7da492db1d132449251209";

const input = document.querySelector("#search-input");
const button = document.querySelector("#search-btn");


button.addEventListener("click", () => {

  const city = input.value.trim();

  if (city === "") {
    return;
  }

  const URL =
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  fetch(URL)
    .then((response) => {

      if (!response.ok) {
        document.getElementById("weather-img").src = "404.jpg";
        return;
      }

      return response.json();
    })

    .then((data) => {

      if (!data) return;

      document.getElementById("condition").textContent =
        data.current.condition.text;

      document.getElementById("city").textContent =
        data.location.name + ", " + data.location.country;

      document.getElementById("feels").textContent =
        "Feels like " + data.current.feelslike_c + "°C";

      document.getElementById("temperature").textContent =
        data.current.temp_c + "°C";

      document.getElementById("feels-temp").textContent =
        data.current.feelslike_c + "°C";

      document.getElementById("humidity").textContent =
        data.current.humidity + "%";

      document.getElementById("wind").textContent =
        data.current.wind_kph + " km/h";


      const weather =
        data.current.condition.text.toLowerCase();

      if (weather.includes("clear")) {

        document.getElementById("weather-img").src =
          "clear.png";

      } else if (weather.includes("rain")) {

        document.getElementById("weather-img").src =
          "rainy.jpg";

      } else if (weather.includes("snow")) {

        document.getElementById("weather-img").src =
          "snow.jpg";

      } else if (
        weather.includes("cloud") ||
        weather.includes("overcast")
      ) {

        document.getElementById("weather-img").src =
          "cloud.jpg";

      } else if (weather.includes("sunny")) {

        document.getElementById("weather-img").src =
          "sunny.webp";

      } else {

        document.getElementById("weather-img").src =
          "https:" + data.current.condition.icon;
      }
    })

    .catch((error) => {
      console.log("Error:", error);
    });
});

