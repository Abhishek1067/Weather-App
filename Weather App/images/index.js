console.log('Hiiiiiiii');
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";


async function showWeather(){ 
let city="goa";
const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const data =await response.json();
  console.log("weather data"+data); 


}