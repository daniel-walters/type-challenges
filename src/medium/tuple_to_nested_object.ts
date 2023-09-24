import { Equal, Expect } from "../utils";

// type
type TupleToNestedObject<T, U> = T extends [infer E, ...infer Rest]
  ? {
      [K in E & string]: TupleToNestedObject<Rest, U>;
    }
  : U;

// tests
type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];
