"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const child_process_1 = require("child_process");
const util_1 = require("util");
const exec = util_1.promisify(child_process_1.exec);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const GITHUB_SHA = core.getInput('GITHUB_SHA');
            const BUILD_URL = `https://github.com/thedigitalstudio/sam-quote/commit/${GITHUB_SHA}/checks`;
            const { stdout, stderr } = yield exec(`git log --oneline -n 1 ${GITHUB_SHA}`);
            const output = stdout.trim();
            core.exportVariable('BUILD_URL', BUILD_URL);
            core.setOutput('BUILD_URL', BUILD_URL);
            core.exportVariable('GITHUB_ONELINE', output);
            core.setOutput('GITHUB_ONELINE', output);
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
