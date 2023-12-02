const searchHTML = document.getElementById('search');
const btnSearchHTML = document.getElementById('btn-search');
const weatherNameHTML = document.getElementById('weather-name');
const weatherTempHTML = document.getElementById('weather-temp');
const weatherIconHTML = document.getElementById('weather-icon');

//? 1 - Traer la key del weather
const KEY = 'c38af2521316d4decea737d0d669d741';

//? 2 - Traer la URL de la API
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${KEY}&units=metric`;

//? 3 - Aplicar la latitud y la longitud
const lat = '33.34534';
const lon = '31.23142';

//? 4 - Crear funcion para obtener coordenadas
function getCoords(lat, lon) {
    
    axios.get(`${URL}&lat=${lat}&lon=${lon}`).then(res => {

        paintWeather(res.data);

    }).catch(error => console.log(error));

};

//? 5 - Crear funcion para pintar la card del clima
function paintWeather(weather) {
    
    weatherNameHTML.innerHTML = weather.name;

    weatherTempHTML.innerHTML = weather.main.temp + '°C';

    const icon = weather.weather[0].icon;

    weatherIconHTML.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png'>`;

};

//? 6 - Crear funcion para aplicar la localizacion inicial
//! NO TENER QUE LLAMAR A LA FUNCION (SE LLAMA UNA UNICA VEZ). IIFE
(function initialGeolocation() {
    
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(data => {

            const latitude = data.coords.latitude;
            const longitude = data.coords.longitude;

            getCoords(latitude, longitude);

        }, error => {
            
            getCoords(lat, lon);

        });

    };

})();

//? 7 - Crear funcion para obtener el clima por ciudad ingresada
function getCoordsCity() {
    
    const city = searchHTML.value;

    axios.get(`${URL}&q=${city}`).then(res => {

        paintWeather(res.data);

    }).catch(error => console.log(error));

};

//? 8 - Si el usuario apreta enter mostrar clima de la ciudad o pais que ingreso
searchHTML.addEventListener('keyup', e => {

    if (e.key === 'Enter') {

        getCoordsCity();

    };

});

//? 9 - Si el usuario hace click en el boton search pintar la ciudad
btnSearchHTML.addEventListener('click', getCoordsCity);