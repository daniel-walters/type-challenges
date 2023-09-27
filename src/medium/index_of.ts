import { Equal, Expect } from "../utils";

// type
type IndexOf<T extends any[], U, CurIdx extends any[] = []> = T extends [
  infer E,
  ...infer Rest
]
  ? Equal<E, U> extends true
    ? CurIdx["length"]
    : IndexOf<Rest, U, [...CurIdx, 1]>
  : -1;

// tests
type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>,
  Expect<Equal<IndexOf<[string, "a"], "a">, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>
];
