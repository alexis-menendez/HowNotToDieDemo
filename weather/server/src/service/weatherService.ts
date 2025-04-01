import dotenv from 'dotenv';
dotenv.config();
import dayjs, { type Dayjs } from 'dayjs';

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
class Weather {
  tempF: number;
  humidity: number;
  windSpeed: number;
  icon: string;
  date: Dayjs | string;
  city: string;
  iconDescription: string;

  constructor(
    tempF: number,
    humidity: number,
    windSpeed: number,
    icon: string,
    date: Dayjs | string,
    city: string,
    iconDescription: string
  ) {
    this.tempF = tempF;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.icon = icon;
    this.date = date;
    this.city = city;
    this.iconDescription = iconDescription;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string = process.env.API_BASE_URL || '';
  private apiKey: string = process.env.API_KEY || '';
  private cityName?: string; // Ensure this is always a string

  constructor() {
    if (!this.baseURL || !this.apiKey) {
      console.error("❌ Missing API_BASE_URL or API_KEY in environment variables.");
    }
  }

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string): Promise<Coordinates> {
    try {
      const response = await fetch(query);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch location data: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Ensure response contains valid location data
      if (!data || !data[0]) {
        throw new Error("No location data found for the given city.");
      }

      const { lat, lon } = data[0];
      return { lat, lon };
    } catch (error: any) {
      console.error("❌ Error fetching location data:", error.message);
      throw error;
    }
  } 

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    return `${this.baseURL}geo/1.0/direct?q=${this.cityName}&limit=1&appid=${this.apiKey}`;
  }

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}&units=imperial`;
  }

  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData(): Promise<Coordinates> {
    try {
      const geoQuery = this.buildGeocodeQuery();
      return await this.fetchLocationData(geoQuery);
    } catch (error: any) {
      console.error("❌ Error fetching and destructuring location data:", error.message);
      throw error;
    }
  }

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    try {
      const weatherQuery = this.buildWeatherQuery(coordinates);
      const response = await fetch(weatherQuery);

      if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data || !data.list) {
        throw new Error("Invalid weather data received.");
      }

      return data;
    } catch (error: any) {
      console.error("❌ Error fetching weather data:", error.message);
      throw error;
    }
  }

  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any): Weather {
    if (!response.list || response.list.length === 0) {
      throw new Error("Weather data is empty.");
    }

    const data = response.list[0];
    const parsedDate = dayjs.unix(data.dt).format('MM/DD/YYYY');

    return new Weather(
      data.main.temp,
      data.main.humidity,
      data.wind.speed,
      data.weather[0].icon,
      parsedDate,
      this.cityName || "Unknown City",
      data.weather[0].description,
    );
  }

  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]): Weather[] {
    const weatherForecast: Weather[] = [currentWeather];

    // Filter for specific daily forecasts at 12:00 PM
    const dailyForecasts = weatherData.filter((data: any) => data.dt_txt.includes('12:00:00'));

    for (const day of dailyForecasts) {
      weatherForecast.push(new Weather(
        day.main.temp,
        day.main.humidity,
        day.wind.speed,
        day.weather[0].icon,
        dayjs.unix(day.dt).format('MM/DD/YYYY'),
        this.cityName || "Unknown City",
        day.weather[0].description,
      ));
    }

    return weatherForecast;
  }

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string): Promise<Weather[]> {
    try {
      this.cityName = city;

      console.log(`📍 Fetching weather data for: ${city}`);

      // Step 1: Get coordinates for the city
      const coordinates = await this.fetchAndDestructureLocationData();

      // Step 2: Fetch weather data using coordinates
      const weatherData = await this.fetchWeatherData(coordinates);

      // Step 3: Parse current weather
      const currentWeather = this.parseCurrentWeather(weatherData);

      // Step 4: Build the 5-day forecast
      return this.buildForecastArray(currentWeather, weatherData.list);
    } catch (error: any) {
      console.error(`❌ Error retrieving weather for city (${city}):`, error.message);
      throw error;
    }
  }
}

export default new WeatherService();