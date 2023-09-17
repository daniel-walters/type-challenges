import { Equal, Expect } from "../utils";

// type
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;

// tests
type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
