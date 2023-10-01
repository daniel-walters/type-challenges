import { Equal, Expect } from "../utils";

// type
type ConstructTuple<
  L extends number,
  Iter extends any[] = [],
  Out extends unknown[] = []
> = Iter["length"] extends L
  ? Out
  : ConstructTuple<L, [...Iter, 1], [...Out, unknown]>;

// tests
type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>["length"], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>["length"], 1000>>
];
