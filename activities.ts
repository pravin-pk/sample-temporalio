export type Person = {
  name: string;
};

export async function greet(person: Person): Promise<string> {
  return `Hello, ${person.name}! Welcome to Temporal.`;
}

export async function randomNumber(person: Person): Promise<string> {
  return `Hello, ${person.name}! Your random number is ${Math.floor(Math.random() * 100)}.`;
}