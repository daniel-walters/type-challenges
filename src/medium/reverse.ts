import { Equal, Expect } from "../utils";

// type
type Reverse<T extends any[], Out extends any[] = []> = T extends [
  ...infer Rest,
  infer E
]
  ? Reverse<Rest, [...Out, E]>
  : Out;

// tests
type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];

type errors = [
  // @ts-expect-error
  Reverse<"string">,
  // @ts-expect-error
  Reverse<{ key: "value" }>
];
