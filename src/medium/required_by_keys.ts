import { Equal, Expect } from "../utils";

// type
type CombineIntersection<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, K extends keyof T = keyof T> = CombineIntersection<
  {
    [U in keyof T as U extends K ? U : never]-?: T[U];
  } & {
    [U in keyof T as U extends K ? never : U]: T[U];
  }
>;

// tests
interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>
];
