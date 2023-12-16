const kayapi="759bc1eed270c0c3d3c35b7cbfdcfb2b";
const Urlapi="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";


async function checkweather(){
const response = await fetch(Urlapi + 'appind=${keyapi}');
var data = await response.json;
console.log(data);
}

checkweather();