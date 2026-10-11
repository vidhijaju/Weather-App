const API_KEY = '7648dcd261eb628db4c371576e4c6de0';

export function getWeather(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}