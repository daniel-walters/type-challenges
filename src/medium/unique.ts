import { Equal, Expect } from "../utils";

// types
type Any<T extends any[], U> = T extends [infer E, ...infer Rest]
  ? Equal<E, U> extends true
    ? true
    : Any<Rest, U>
  : false;

type Unique<T extends any[], Out extends any[] = []> = T extends [
  infer E,
  ...infer Rest
]
  ? Any<Out, E> extends true
    ? Unique<Rest, Out>
    : Unique<Rest, [...Out, E]>
  : Out;

// tests
type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>,
  Expect<
    Equal<
      Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>,
      [string, number, 1, "a", 2, "b"]
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >
];
