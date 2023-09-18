import { Equal, Expect } from "../utils";

// type
type LengthOfString<
  S extends string,
  L extends string[] = []
> = S extends `${infer F}${infer Rest}`
  ? LengthOfString<Rest, [...L, F]>
  : L["length"];

// tests
type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];
