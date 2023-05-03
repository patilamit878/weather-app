import axios from "axios";

const API_KEY = 'd3e93127e8cdca4ebfeb8bbe6364d1c6';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather =async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city}, ${country}&appid=${API_KEY}&units=metric`)
        return response.data;
    } catch (error) {
        console.log('Error ehile calling api', error.message);
        return error.response
    }
}