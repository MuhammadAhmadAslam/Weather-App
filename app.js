const apiKey = '265f4c7438d055c461327c875f4550bc';
const searchBar = document.getElementById('search-bar');

function checkWeather() {
    const icon = document.getElementById('icon')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const iconCode = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    icon.src = iconUrl
      const temp = document.getElementById('temp')
      temp.innerHTML = `${data.main.temp}<sup>°</sup>C`

      const feelsLike = document.getElementById('feelsLike')
      feelsLike.innerHTML = `Feels Like ${data.main.feels_like}<sup>°</sup>C `

      const main = document.getElementById('main')
      main.innerText = data.weather[0].main

      const desc = document.getElementById('desc')

      desc.innerText = data.weather[0].description


      const cityName = document.getElementById('cityName')
      cityName.innerText = data.name
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "CHECK YOUR INTERNET CONNECTION"
      });
    });
}


const dateWrite = document.getElementById('date')
const date = new Date()
const weeksName = ['Sunday','Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
 const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
dateWrite.innerHTML = `${date.getDate()} - ${monthNames[date.getMonth()]} - ${date.getFullYear()} ${weeksName[date.getDay()]} ${date.getHours()} : ${date.getMinutes()}`

const searchBtn = document.getElementById('search')
searchBtn.addEventListener('click' , checkWeather)

checkWeather()

