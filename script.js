const apiKey ="fb0c347a02c95d14dafa6c9e948b898b"; // Mi APi para manejar la busqueda del clima
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&q="; // API con idioma en español
const searchBox = document.querySelector(".search input"); // El buscador
const searchBtn = document.querySelector(".search button"); // El boton para buscar
const weatherIcon = document.querySelector(".weather-icon"); // El icono del clima

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Evento para el botón de búsqueda
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
});

// Evento para presionar Enter en el cuadro de búsqueda
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});


// Evento para presionar ENTER en el cuadro de busqueda
searchBox.addEventListener("keypress", (event) =>{
    if(event.key == "Enter"){
        checkWeather(searchBox.value);
    }
});