import { Equal, Expect } from "../utils";

// type
type Filter<T extends any[], P, Out extends any[] = []> = T extends [
  infer E,
  ...infer Rest
]
  ? E extends P
    ? Filter<Rest, P, [...Out, E]>
    : Filter<Rest, P, Out>
  : Out;

// tests
type Falsy = false | 0 | "" | null | undefined;

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>
];
