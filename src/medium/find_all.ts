import { Equal, Expect } from "../utils";

// type
type FindAll<
  T extends string,
  P extends string,
  Found extends any[] = [],
  Idx extends any[] = []
> = P extends ""
  ? []
  : T extends `${infer Ch}${infer Rest}`
  ? T extends `${P}${any}`
    ? FindAll<Rest, P, [...Found, Idx["length"]], [...Idx, Ch]>
    : FindAll<Rest, P, Found, [...Idx, Ch]>
  : Found;

// tests
type cases = [
  Expect<
    Equal<FindAll<"Collection of TypeScript type challenges", "Type">, [14]>
  >,
  Expect<
    Equal<FindAll<"Collection of TypeScript type challenges", "pe">, [16, 27]>
  >,
  Expect<Equal<FindAll<"Collection of TypeScript type challenges", "">, []>>,
  Expect<Equal<FindAll<"", "Type">, []>>,
  Expect<Equal<FindAll<"", "">, []>>,
  Expect<Equal<FindAll<"AAAA", "A">, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<"AAAA", "AA">, [0, 1, 2]>>
];
