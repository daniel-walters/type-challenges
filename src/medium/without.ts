import { Equal, Expect } from "../utils";

// type
type Without<T, U, Out extends any[] = []> = T extends [infer E, ...infer Rest]
  ? U extends number
    ? E extends U
      ? Without<Rest, U, Out>
      : Without<Rest, U, [...Out, E]>
    : U extends any[]
    ? E extends U[number]
      ? Without<Rest, U, Out>
      : Without<Rest, U, [...Out, E]>
    : never
  : Out;

// tests
type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];
