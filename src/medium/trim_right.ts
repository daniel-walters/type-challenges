import { Equal, Expect } from "../utils";

// type
type TrimRight<S extends string> = S extends `${infer Str}${Whitespace}`
  ? TrimRight<Str>
  : S;

type Whitespace = " " | "\n" | "\t";

// tests
type cases = [
  Expect<Equal<TrimRight<"str">, "str">>,
  Expect<Equal<TrimRight<"str ">, "str">>,
  Expect<Equal<TrimRight<"str     ">, "str">>,
  Expect<Equal<TrimRight<"     str     ">, "     str">>,
  Expect<Equal<TrimRight<"   foo bar  \n\t ">, "   foo bar">>,
  Expect<Equal<TrimRight<"">, "">>,
  Expect<Equal<TrimRight<"\n\t ">, "">>
];
