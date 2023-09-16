import { Equal, Expect, NotAny } from "../utils";

// type
type HelloWorld = string;

// tests
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
