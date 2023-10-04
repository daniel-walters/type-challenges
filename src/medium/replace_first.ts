import { Equal, Expect } from "../utils";

// type
type ReplaceFirst<
  T extends readonly unknown[],
  S,
  R,
  Seen extends any[] = []
> = T extends [infer E, ...infer Rest]
  ? E extends S
    ? [...Seen, R, ...Rest]
    : ReplaceFirst<Rest, S, R, [...Seen, E]>
  : Seen;

// tests
type cases = [
  Expect<Equal<ReplaceFirst<[1, 2, 3], 3, 4>, [1, 2, 4]>>,
  Expect<Equal<ReplaceFirst<["A", "B", "C"], "C", "D">, ["A", "B", "D"]>>,
  Expect<
    Equal<ReplaceFirst<[true, true, true], true, false>, [false, true, true]>
  >,
  Expect<
    Equal<
      ReplaceFirst<[string, boolean, number], boolean, string>,
      [string, string, number]
    >
  >,
  Expect<Equal<ReplaceFirst<[1, "two", 3], string, 2>, [1, 2, 3]>>,
  Expect<
    Equal<
      ReplaceFirst<["six", "eight", "ten"], "eleven", "twelve">,
      ["six", "eight", "ten"]
    >
  >
];
