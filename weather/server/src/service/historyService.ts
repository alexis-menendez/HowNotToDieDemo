import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;
  constructor(
    name: string,
    id: string) {
    this.name = name;
    this.id = id;
  }
}
// TODO: Complete the HistoryService class  (OUR CRUD Methods)
class HistoryService {
  //console.log("HistoryService");
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {

    // ES5 Syntax with and error first callback function
    return await fs.promises.readFile('./db/db.json', 'utf8');

    /*
    // ES6 Syntax with a promise based function
    fs.readFile('somePath', 'utf8')
      .then(data => {
        console.log("data: ", data);
        console.log("type: ", typeof data);
        return data;
      })
      .catch(err => {
        console.log(err);
        return err.message;
      }
      );

    // ES7 Syntax with async/await
     async function someAsyncFunc() {
        try {
          const data = await fs.readFile('somePath', 'utf8');
          console.log("data: ", data);
          console.log("type: ", typeof data);
          return data;
        } catch (err) {
          console.log(err);
          return err.message;
        }
      }
    */
  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    fs.writeFile('./db/db.json', JSON.stringify(cities), (err) => {
      if (err) {
        console.log(err);
        return err.message;
      } else {
        console.log('File written successfully\n');
        //console.log('The written has the following contents:');
        // console.log(fs.readFileSync('../../db/db.json', 'utf8'));
        return 'File written successfully';
      }
    });
  }

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities(): Promise<City[]> {
    const data = await this.read();
    console.log("Get Cities: ", data);  // [ {"name": "New York", "id": "1"}, {"name": "Los Angeles", "id": "2"} ]  JSON string of objects
    // Convert JSON string to array of City objects
    if (data === undefined) {
      return [];
    }
    const citiesArray = JSON.parse(data);
    return citiesArray;
  }

  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    // Verify that we RECIEVED the city name (Data)
    // Create a new City object
    const tempCity = new City(city, uuidv4());

    // IF we want to ADD and NEW CITY to our ARRAY (Exisitng dataset)
    const currentCitiesData = await this.getCities();  // [{ name: 'New York', id: '1' }, { name: 'Los Angeles', id: '2' }]
    currentCitiesData.push(tempCity);   // typoOf JS ARRAY 
    this.write(currentCitiesData);
  }

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    const currentCitiesData = await this.getCities();
    const updatedCitiesData = currentCitiesData.filter(city => city.id !== id);
    await this.write(updatedCitiesData);
    return updatedCitiesData;
  }
}

export default new HistoryService();
