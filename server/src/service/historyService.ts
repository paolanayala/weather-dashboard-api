import e from 'express';
import fs from 'fs/promises';

// TODO: Define a City class with name and id properties
class City {
  cityName: string;
  id: string;

  constructor(cityName: string, id: string) {
    this.cityName = cityName;
    this.id = id;
}

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    try {
    const data = await fs.readFile('./src/data/searchHistory.json', 'utf8');
    return JSON.parse(data);
    } catch (error) {
      console.error('Error reading search history: ', error);
      throw new Error('Could not read search history');
     }
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    return await fs.writeFile('./src/data/searchHistory.json', JSON.stringify(cities, null, 2));
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
