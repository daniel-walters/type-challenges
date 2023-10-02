import { Equal, Expect } from "../utils";

// type
type ParseUrlParams<T> = T extends `${any}:${infer Rest}`
  ? Rest extends `${infer Param}/${infer Post}`
    ? Param | ParseUrlParams<Post>
    : Rest
  : never;

// tests
type cases = [
  Expect<Equal<ParseUrlParams<":id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user">, "id" | "user">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user/like">, "id" | "user">>
];
