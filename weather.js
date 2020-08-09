// variable to refer weather section
let weatherSection = document.getElementById("weather");

// event listener to get current location
window.addEventListener('load', getLocation)

// function to get current location
function getLocation() {
    if (navigator.geolocation) { //checks if page has access to location or not
        navigator.geolocation.getCurrentPosition(setPosition);
    } else {
        weatherSection.innerHTML = 'Error'
        weatherSection.setAttribute('color', 'red')
    }
}

// function to set position in variables and to pass on
function setPosition(e) {
    let lat = e.coords.latitude
    let lon = e.coords.longitude

    passLocation(lat, lon)
    //console.log(lat)
    //console.log(lon)
}

// function to request,receive and store weather data from serer
function passLocation(lat, lon) {
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=cc5825357df68209b3272ad0c99d5ed5'

    let request = new XMLHttpRequest();// create request object

    request.open('GET', weatherUrl);//initializes request

    request.responseType = 'json';//sets response type

    request.send();//sends request

    // event to store requested data
    request.addEventListener('load', function () {
        let weather = request.response;
        data(weather)

    })

}

//function to view weather, temp and location
function data(data) {
    let div = document.createElement('div')

    // space for icons
    let icon = document.createElement('img')
    icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + data['weather'][0].icon + '.png')

    // space for weather type
    let weatherType = document.createElement('h1')
    weatherType.setAttribute('font-weight', 'bold')
    weatherType.textContent = data['weather'][0].main

    // space for  temperatures
    let temp = document.createElement('p')
    temp.textContent = "Temperature : " + data['main'].temp
    let feelTemp = document.createElement('p')
    feelTemp.textContent = "Feels Like : " + data['main'].feels_like

    // space for location
    let cityName = document.createElement('p')
    cityName.textContent = data['name'];

    // appending to weather section
    div.appendChild(icon)
    div.appendChild(weatherType)
    div.appendChild(temp)
    div.appendChild(feelTemp)
    div.appendChild(cityName)
    weatherSection.appendChild(div)

}







