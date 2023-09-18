import { Equal, Expect } from "../utils";

// type
type TrimLeft<S extends string> = S extends `${infer F}${infer R}`
  ? F extends " " | "\n" | "\t"
    ? TrimLeft<R>
    : S
  : S;

// tests
type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];
