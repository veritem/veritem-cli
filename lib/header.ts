import { bold, green, italic, magenta, parse } from "../deps.ts";

export const Header = (): void => {
  console.clear();
  console.log("\n\n");
  console.log(bold(green("Makuza Mugabo Verite")));
  console.log(italic("Curious Open source developer"));
  console.log(magenta("Version: 0.0.1"));
  console.log("\n\n");
};
