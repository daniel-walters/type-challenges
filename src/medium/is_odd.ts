import { Equal, Expect } from "../utils";

// type
type IsOdd<T extends number> = `${T}` extends `${number}${1 | 3 | 5 | 7 | 9}`
  ? true
  : false;

// tests
type cases = [
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>
];
