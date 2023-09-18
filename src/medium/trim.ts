import { Equal, Expect } from "../utils";

// type
type Whitespace = " " | "\n" | "\t";
type Trim<S extends string> = S extends
  | `${Whitespace}${infer T}`
  | `${infer T}${Whitespace}`
  ? Trim<T>
  : S;

// tests
type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];
