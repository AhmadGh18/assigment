interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

function selectProductFields<T extends keyof Product>(
  product: Product,
  keys: T[]
): Pick<Product, T> {
  const result = {} as Pick<Product, T>;
  keys.forEach((key) => (result[key] = product[key]));
  return result;
}

interface Person {
  name: string;
  age: number;
  socialSecurityNumber: string;
}

type SafePerson = Omit<Person, "socialSecurityNumber">;

function getSafePerson(person: Person): SafePerson {
  const { socialSecurityNumber, ...safeData } = person;
  return safeData;
}

interface Config {
  apiKey: string;
  baseUrl: string;
  timeout: number;
}

type ImmutableConfig = Readonly<Config>;
type StringNumberDictionary = { [key: string]: number };
type AvailableColors = "red" | "green" | "blue" | "yellow";
type ExcludedColors = Exclude<AvailableColors, "yellow" | "blue">;
type PrimaryColors = Extract<AvailableColors, "red" | "blue">;
type Address = string | null | undefined;
type NonNullableAddress = NonNullable<Address>;
