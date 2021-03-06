import * as core from '@actions/core';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';

const exec = promisify(_exec);

async function run() {
  try {
    const GITHUB_SHA = core.getInput('GITHUB_SHA');
    const BUILD_URL = `https://github.com/thedigitalstudio/sam-quote/commit/${GITHUB_SHA}/checks`;

    const { stdout, stderr } = await exec(`git log --oneline -n 1 ${GITHUB_SHA}`);

    const output = stdout.trim();

    core.exportVariable('BUILD_URL', BUILD_URL);
    core.setOutput('BUILD_URL', BUILD_URL)

    core.exportVariable('GITHUB_ONELINE', output);
    core.setOutput('GITHUB_ONELINE', output)

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
