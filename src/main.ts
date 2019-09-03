import * as core from '@actions/core';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';

const exec = promisify(_exec);

async function run() {
  try {
    const GITHUB_SHA = core.getInput('GITHUB_SHA');

    const { stdout, stderr } = await exec(`git log --oneline -n 1 ${GITHUB_SHA}`);
    core.exportVariable('GIHTUB_ONELINE', stdout);

    core.setOutput('GIHTUB_ONELINE', stdout)

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
