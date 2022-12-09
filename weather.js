class Weather {
    constructor(city, state) {
      this.apiKey = 'b618cc59d6f901c18cdf81a45950d75d';
      this.city = city;
      this.state = state;
    }
  
    // Fetch weather from API
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?city=${this.city}&state=${this.state}&appid=${this.apikey}.json`);
  
      const responseData = await response.json();
  
      return responseData.current_observation;
    }
  
    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
  }