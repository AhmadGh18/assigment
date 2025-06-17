//1
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

function handleUser(user: Partial<User>) {
  console.log(user);
}

//2
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

type SelectProductFields<T, K extends keyof T> = Pick<T, K>;

type SomeProductFields = SelectProductFields<Product, "id" | "name">;

//3
interface Person {
  name: string;
  age: number;
  socialSecurityNumber: string;
}

function getSafePerson(person: Person): Omit<Person, "socialSecurityNumber"> {
  const { socialSecurityNumber, ...safe } = person;
  return safe;
}
//4
interface Config {
  apiKey: string;
  baseUrl: string;
  timeout: number;
}

const config: Readonly<Config> = {
  apiKey: "abc",
  baseUrl: "https://example.com",
  timeout: 3000,
};

//5
type NumberDictionary = Record<string, number>;

//6
type AvailableColors = "red" | "green" | "blue" | "yellow";
type FilteredColors = Exclude<AvailableColors, "blue" | "yellow">;

//7
type SelectedColors = Extract<AvailableColors, "red" | "blue">;

//8
type Address = string | null | undefined;
type CleanAddress = NonNullable<Address>;
