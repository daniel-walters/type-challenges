import { Equal, Expect } from "../utils";

// type
type Pop<T extends any[]> = T extends []
  ? []
  : T extends [...infer A, infer _]
  ? [...A]
  : never;

// tests
type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>,
  Expect<Equal<Pop<[1]>, []>>
];
