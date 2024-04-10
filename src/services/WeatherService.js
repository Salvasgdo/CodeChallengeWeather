import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';

export async function fetchWeather(lat, lon) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat: lat,
        lon: lon,
        appid: 'a5a47c18197737e8eeca634cd6acb581',
        units: 'metric',
        exclude: 'hourly,minutely,alerts'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}
