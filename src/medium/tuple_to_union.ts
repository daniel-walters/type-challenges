import { Equal, Expect } from "../utils";

// type
type TupleToUnion<T extends any[]> = T[number];

// tests
type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
