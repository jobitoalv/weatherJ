class Weather {
    constructor(city) {
      this.apiKey = 'b618cc59d6f901c18cdf81a45950d75d';
      this.city = city.name;
    }
  
    // Fetch weather from API
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}.json`);
  
      const responseData = await response.json();
  
      return responseData.current_observation;
    }
  
    // Change weather location
    changeLocation(city) {
      this.city = city;
    }
  }