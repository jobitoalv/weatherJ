class Weather {
    constructor(city) {
      this.apiKey = 'b618cc59d6f901c18cdf81a45950d75d';
      this.city = city;
      this.country = country;
    }
  
      // fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&units=metric&APPID=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}