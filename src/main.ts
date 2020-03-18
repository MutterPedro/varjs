import { execSync } from "child_process";

import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  try {
    core.info(`Running ${github.context.action}`);

    const script = core.getInput("script");
    const context = github.context;

    execSync("pwd");
    execSync("ls");
    execSync("ls /");

    execSync(`cd ${context.repo.repo} && npm run ${script}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
