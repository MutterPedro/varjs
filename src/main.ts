import { execSync } from "child_process";

import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  try {
    core.info(`Running ${github.context.action}`);

    const script = core.getInput("script");

    const output = execSync(
      `cd $GITHUB_WORKSPACE && npm install && npm run ${script}`
    );
    core.info(output.toString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
