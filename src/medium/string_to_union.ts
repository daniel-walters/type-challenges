import { Equal, Expect } from "../utils";

// type
type StringToUnion<T extends string> = T extends ""
  ? never
  : T extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never;

// tests
type cases = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<
    Equal<
      StringToUnion<"coronavirus">,
      "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
    >
  >
];
