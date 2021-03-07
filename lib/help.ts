import { bold } from "../deps.ts";

// Help commands

export const HelpMessage = () => {
  console.log(`Usage: veritem [command] [option]\n`);
  console.log(`Options`);
  console.log(` ${bold("-h,--help")}\t\t Shows Help message`);
  console.log(
    ` ${bold("-v,--version")}\t\t Show the current version of cli\n\n`,
  );
  console.log(`Commands\n`);
  console.log(` ${bold("$ github, gh")}\t\t Open his github Profile`);
  console.log(` ${bold("$ twitter, twr")}\t\t Open his twitter Profile`);
  console.log(` ${bold("$ blog, blg")}\t\t Open his Blog Profile`);
  console.log(` ${bold("$ home, hm")}\t\t Open his Personal Website`);
  console.log(` ${bold("$ birthDay,bd")}\t\t View his cake date`);
  Deno.exit();
};
