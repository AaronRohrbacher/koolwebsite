import { WeatherData, WeatherAPIResponse } from "@/types/weather";

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = "http://api.openweathermap.org/data/3.0/weather";

export async function fetchWeather(city: string): Promise<WeatherData> {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=fahrenheit`;

  const response = await fetch(url);

  const data: WeatherAPIResponse = await response.json();

  return {
    location: data.name,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    windSpeed: data.wind.speed,
  };
}

export function getWeatherEmoji(description: string): string {
  const lower = description.toLowerCase();
  if (lower.includes("clear")) return "☀️";
  if (lower.includes("cloud")) return "☁️";
  if (lower.includes("rain")) return "🌧️";
  if (lower.includes("snow")) return "❄️";
  if (lower.includes("thunder")) return "⚡";
  if (lower.includes("mist") || lower.includes("fog")) return "🌫️";
  return "🌡️";
}
