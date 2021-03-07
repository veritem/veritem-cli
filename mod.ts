import { open, parse } from "./deps.ts";
import { Header, HelpMessage } from "./lib/index.ts";

const YEAR = new Date().getFullYear();

if (import.meta.main) {
  const { args } = Deno;

  const parseArgs = parse(args);

  if (args.length === 0 || parseArgs.h || parseArgs.help) {
    Header();
    HelpMessage();
  } else if (parseArgs._.includes("github") || parseArgs._.includes("gh")) {
    await open("https://veritem.me/gh");
  } else if (parseArgs._.includes("twitter") || parseArgs._.includes("twr")) {
    await open("http://veritem.me/twitter");
  } else if (parseArgs._.includes("blog") || parseArgs._.includes("blg")) {
    await open("http://codekin.tech");
  } else if (parseArgs._.includes("home") || parseArgs._.includes("hm")) {
    await open("http://veritem.me");
  } else if (parseArgs._.includes("birthDay") || parseArgs._.includes("bd")) {
    Header();
    console.log(`His birthday is at 23/02/${YEAR}`);
  } else {
    Header();
    console.log("Invalid argument");
  }
}
