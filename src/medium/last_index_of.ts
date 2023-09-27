import { Equal, Expect } from "../utils";

// type
type LastIndexOf<
  T,
  U,
  CurIdx extends any[] = [],
  FoundIdx extends any[] = []
> = T extends [infer E, ...infer Rest]
  ? Equal<E, U> extends true
    ? LastIndexOf<Rest, U, [...CurIdx, 1], [...CurIdx]>
    : LastIndexOf<Rest, U, [...CurIdx, 1], FoundIdx>
  : FoundIdx["length"] extends 0
  ? -1
  : FoundIdx["length"];

// tests
type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, "a", number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, "a", any, 1], any>, 5>>
];
