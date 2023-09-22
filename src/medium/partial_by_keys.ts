import { Equal, Expect } from "../utils";

// type
type JoinIntersection<T> = {
  [K in keyof T]: T[K];
};

type PartialByKeys<T, K extends keyof T = keyof T> = JoinIntersection<
  {
    [U in keyof T as U extends K ? U : never]?: T[U];
  } & {
    [U in keyof T as U extends K ? never : U]: T[U];
  }
>;

// tests
interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
];
