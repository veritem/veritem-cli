import { parse } from "./deps.ts";
import { Header, HelpMessage } from "./lib/index.ts";

if (import.meta.main) {
  const { args } = Deno;

  const parseArgs = parse(args);

  Header();

  if (args.length === 0 || parseArgs.h || parseArgs.help) {
    HelpMessage();
  } else {
    console.log("Invalid argument");
  }
}
