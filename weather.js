const KEY_API = 'a72b4c6c24bdd6a749c57344f0d562f0';

function initGeo(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        const weather = document.querySelector('.util .weather');
        const city = document.querySelector('.util .city');
        city.innerText = `Here is ${data.name}, `
        weather.innerText = `Today is ${data.weather[0].main}`
    })

}
function initGeoError(){
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(initGeo, initGeoError);