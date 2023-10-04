import { Equal, Expect } from "../utils";

// type
type Combs<T extends any[]> = T extends [
  infer E extends string,
  ...infer Rest extends string[]
]
  ? `${E} ${Rest[number]}` | Combs<Rest>
  : never;

// tests
type ModifierKeys = ["cmd", "ctrl", "opt", "fn"];
type CaseTypeOne =
  | "cmd ctrl"
  | "cmd opt"
  | "cmd fn"
  | "ctrl opt"
  | "ctrl fn"
  | "opt fn";

type cases = [Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>];
