import { Equal, Expect } from "../utils";

// type
type Truthy<T> = T extends "" | 0 | false | undefined | null | []
  ? false
  : keyof T extends never
  ? false
  : true;

type AnyOf<T extends readonly any[]> = T extends [infer E, ...infer Rest]
  ? Truthy<E> extends true
    ? true
    : AnyOf<Rest>
  : false;

type AnyOfBetter<T extends readonly any[]> = T[number] extends
  | 0
  | ""
  | false
  | undefined
  | null
  | []
  | { [key: string]: never }
  ? false
  : true;

// tests
type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];
