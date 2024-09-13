const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=46.4825&lon=30.7233&units=metric&appid=7b106d5dd93994170512977e3523ef41';

// Функция для обновления виджета
function updateWidget(data) {
    const cityElement = document.querySelector('.city');
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const humidityElement = document.querySelector('.humidity');
    const windElement = document.querySelector('.wind');
    const iconElement = document.querySelector('.icon');
    const loadingElement = document.querySelector('.loading');

   
    loadingElement.style.display = 'none';


    cityElement.textContent = data.name; 
    temperatureElement.textContent = `${data.main.temp.toFixed(1)}°C`; 
    descriptionElement.textContent = data.weather[0].description;  
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`; 
    windElement.textContent = `Wind: ${data.wind.speed} m/s`; 


    const iconCode = data.weather[0].icon; 
    iconElement.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    iconElement.style.display = 'block'; 
}


function fetchWeatherData() {
    const loadingElement = document.querySelector('.loading');
    loadingElement.style.display = 'block'; 
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            updateWidget(data); 
        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.querySelector('.loading').textContent = 'Failed to load data.';
        });
}


document.querySelector('.refresh-btn').addEventListener('click', () => {
    fetchWeatherData();
});


fetchWeatherData();