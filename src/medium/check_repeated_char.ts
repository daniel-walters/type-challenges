import { Equal, Expect } from "../utils";

//type
type CheckRepeatedChars<
  T extends string,
  Chars extends Record<string, boolean> = {}
> = T extends `${infer Ch}${infer Rest}`
  ? Ch extends keyof Chars
    ? true
    : CheckRepeatedChars<Rest, Chars & { [K in Ch]: true }>
  : false;

// tests
type cases = [
  Expect<Equal<CheckRepeatedChars<"abc">, false>>,
  Expect<Equal<CheckRepeatedChars<"abb">, true>>,
  Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
  Expect<Equal<CheckRepeatedChars<"">, false>>
];
