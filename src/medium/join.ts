import { Equal, Expect } from "../utils";

// type
type Join<T extends any[], U, Out extends string = ""> = U extends number
  ? Join<T, `${U}`, Out>
  : T extends [infer E, ...infer Rest]
  ? T["length"] extends 1
    ? `${Out}${E & string}`
    : Join<Rest, U, `${Out}${E & string}${U & string}`>
  : Out;

// tests
type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>,
  Expect<Equal<Join<[], "u">, "">>
];
