import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export type Person = {
  name: string;
};

export async function writeToFile(person: Person) {
  const filePath = `./out/${new Date().toDateString()}.csv`;

  if (fs.existsSync(filePath)) {
    const data = `${person.name},${new Date().toISOString()}\n`;
    fs.appendFileSync(filePath, data);
  } else {
    const data = `uuid,name,timestamp\n${uuidv4()},${person.name},${new Date().toISOString()}\n`;
    fs.writeFileSync(filePath, data);
  }
  return filePath;
}

export async function insertIntoDb(person: Person) {
  // Simulate a database insert operation
  console.log(`Inserting ${JSON.stringify(person)} into the database...`);
  return Promise.resolve();
}