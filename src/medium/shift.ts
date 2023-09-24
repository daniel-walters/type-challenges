import { Equal, Expect } from "../utils";

// type
type Shift<T extends any[]> = T extends [infer _, ...infer Rest]
  ? [...Rest]
  : T;

// tests
type cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
];
