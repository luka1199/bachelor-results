# bachelor-results

The scripts used to generate these results can be found here: https://github.com/luka1199/bachelor-tools

## Summary

- DefinitelyTyped modules: 7505
- with GitHub-repo: 6079
- with test-script (non-empty, non-default): 5051
- with successful instrumentation: 3575
- with successful installation (npm install): 1922
- Run-time Information: 1922
- with non-empty Declaration File: 1243

## Sources

DefinitelyTyped: https://github.com/DefinitelyTyped/DefinitelyTyped

DefinitelyTyped commit hash: `06b805fbe05ce89039ca30f115faa13784baa8fb`

Top 1000 most depended-upon NPM modules: https://gist.github.com/anvaka/8e8fa57c7ee1350e3491 (25.06.21)
## Utility

### Print count of each log code in a log file: `utils/logCounter.js`

Usage:

```bash
node utils/logCounter.js <path to log file>
```
Example:

```bash
node utils/logCounter.js ./5_instrumentation/instrument_babel.log
```
Example output:
```bash
{ OK: 4530, NOK: 916 }
```

### Print all modules with specific log code in a log file: `utils/getModuleNamesWithLogCode.js`

Usage:

```bash
node utils/getModuleNamesWithLogCode.js <path to log file> <log code>
```

Example:

```bash
node utils/getModuleNamesWithLogCode.js ./5_instrumentation/instrument_babel.log NOK
```

Example output:
```
airbnb-prop-types
alt
amazon-product-api
alloy
angular-es
angular-cookies
...
```

## 1_extract-modules

### `modules_definitelyTyped.csv`
Module names and version numbers of DefinitelyTyped modules.

Format: `moduleName,moduleVersion`

Amount of modules in DefinitelyTyped: 7505

### `modules_top1000.csv`
Top 1000 most depended-upon npm modules.

Format: `moduleName`

## 2_get-repositories

### `modulesWithRepo_definitelyTyped.csv`
Module names, GitHub urls and commit hashes of DefinitelyTyped modules (Commit hashes corresponding to the versions in `modules_definitelyTyped.csv`).

Format: `moduleName,githubURL,commitHash`

Amount of modules with GitHub-Repo and package.json: 6079

### `modulesWithRepo_top1000.csv`
Module names and GitHub urls of top 1000 most depended-upon npm modules. 

Format: `moduleName,githubURL`


## 3_extract-test-scripts

### `testScripts_definitelyTyped.csv`
Module names and test scripts of DefinitelyTyped modules. The test scripts also contain the contents of other scripts executed in the test script.

Example:
```json
{
  "name": "my-module",
  "scripts": {
    "cleanup": "echo cleanup",
    "pretest": "echo Starting tests...",
    "test": "mocha test && npm run cleanup",
    "posttest": "echo done!"
  },
  ...
}
```
Result:
```csv
my-module,"echo Starting tests... && mocha test && echo cleanup && echo done!"
```

Format: `moduleName,testScript`

## 4_analyse-test-scripts

### `modulesWithTestScript_definitelyTyped.csv`
Module names of modules that have a non-empty non-default test script (Default test script: `"echo \"Error: no test specified\" && exit 1"`).

Format: `moduleName`

Amount of modules with non-empty non-default test script: 5051

### `testScriptData_definitelyTyped.json`
Information about testing frameworks, code analysis tools, task runners, build tools, browsers and other information used in test scripts of DefinitelyTyped modules.

#### Test frameworks
(The relative proportion refers to all non-empty non-default test scripts)
1. Mocha: 1786 (35%)
2. Tap: 484 (9,5%)
3. Jest: 480 (9,5%)
4. Tape: 281 (5,6%)
5. AVA: 281 (5,6%)
6. Karma: 151 (3%)

### `testScriptData_top1000.json`
Information about testing frameworks, code analysis tools, task runners, build tools, browsers and other information used in test scripts of top 1000 NPM modules.

#### Test frameworks
(The relative proportion refers to all non-empty non-default test scripts)
1. Mocha: 206 (23,8%)
2. Jest: 121 (14%)
3. Tap: 85 (9,8%)
4. AVA: 69 (8%)
5. tsd: 44 (5,1%)
6. Tape: 40 (4,6%)

## 5_instrumentation

### `instrument_no_babel.log`

Module names and results of instrumentation with Jalangi2 without using Babel.

Log codes:
- `OK`: No Error occured while instrumenting 
- `NOK`: Error occured while istrumenting

Format: `moduleName - logCode`

Amount of successful instrumentations: 2977

### `instrument_babel.log`

Module names and results of instrumentation with Jalangi2 and Babel.

Log codes:
- `OK`: No Error occured while instrumenting 
- `NOK`: Error occured while istrumenting

Format: `moduleName - logCode`

Amount of successful instrumentations: 4530

## 6_installation

### `install.log`

Module names and results of intallation of module dependecies with `npm install`.

Log codes:
- `OK`: No Error occured while installing dependecies 
- `NOK`: Error occured while installing dependecies
- `TIMEOUT`: Installation took more than 250 seconds

Format: `moduleName - logCode`

Amount of successful installations: 2577

Amount of modules with non-empty non-default test script and successful installation: 1922

## 7_test+generate-run-time-info

### `test.log`

Module names and results of running tests with `npm run test`.

Log codes:
- `OK`: No Error occured while running tests 
- `NOK`: Error occured while running tests
- `TIMEOUT`: Tests took more than 100 seconds

Format: `moduleName - logCode`

Amount of tests without errors: 1227

### `test_instrumented_no_analysis.log`

Module names and results of running tests with `npm run test` on instrumented code with no analysis.

Log codes:
- `OK`: No Error occured while running tests 
- `NOK`: Error occured while running tests
- `TIMEOUT`: Tests took more than 100 seconds

Format: `moduleName - logCode`

Amount of tests without errors: 797

### `test_instrumented_analysis.log`

Module names and results of running tests with `npm run test` on instrumented code with analysis.

Log codes:
- `OK`: No Error occured while running tests 
- `NOK`: Error occured while running tests
- `TIMEOUT`: Tests took more than 100 seconds

Format: `moduleName - logCode`

Amount of tests without errors: 355
Amount of generated run-time info files: 1922

### `test_clean_instrumented_no_analysis.log`

Module names and results of running tests without code analysis tools with `npm run test` on instrumented code with no analysis.

Log codes:
- `OK`: No Error occured while running tests 
- `NOK`: Error occured while running tests
- `TIMEOUT`: Tests took more than 100 seconds

Format: `moduleName - logCode`

Amount of tests without errors: 900

### `test_clean_instrumented_analysis.log`

Module names and results of running tests without code analysis tools with `npm run test` on instrumented code with analysis.

Log codes:
- `OK`: No Error occured while running tests 
- `NOK`: Error occured while running tests
- `TIMEOUT`: Tests took more than 100 seconds

Format: `moduleName - logCode`

Amount of tests without errors: 396
Amount of generated run-time info files: 1922

### `results<i>.tar.gz`

Structure:
```
results/
    module1/
        normal/
            output.json
            output_fixed.json
        cleaned/
            output.json
            output_fixed.json
    ...
```
- `normal/`: Results of tests with code analysis tools
- `cleaned/`: Results of tests without code analysis tools
- `output.json`: Normal run-time info output
- `output_fixed.json`: Run-time info output with `requiredModule` with paths replaced with correct module name

## 8_analyse-run-time-info

### `validate_analysis_normal.log`

Module names and validity of run-time info of tests with code analysis tools.

Log codes:
- `OK`: Valid run-time info
- `INVALID`: Invalid JSON file
- `EMPTY`: Run-time info empty

Format: `moduleName - logCode`

Amount of valid run-time info files: 1914

### `validate_analysis_cleaned.log`

Module names and validity of run-time info of tests without code analysis tools.

Log codes:
- `OK`: Valid run-time info
- `INVALID`: Invalid JSON file
- `EMPTY`: Run-time info empty

Format: `moduleName - logCode`

Amount of valid run-time info files: 1915

## 9_generate-declaration-file

### `results/`

Structure:
```
results/
    module1/
        normal/
            index.d.ts
        cleaned/
            index.d.ts
    ...
```
- `normal/`: Generated declaration files of run-time info with code analysis tools
- `cleaned/`: Generated declaration files of run-time info without code analysis tools
- `index.d.ts`: Declaration file

## 10_analyse-declaration-files

### `validate_declaration_files_normal.log`

Module names and validity of declaration files of run-time info with code analysis tools.

Log codes:
- `OK`: Valid declaration file
- `EMPTY`: Empty declaration file
- `NON-EXISTENT`: Non-existent declaration file

Format: `moduleName - logCode`

Amount of valid run-time info files: 1233

### `validate_declaration_files_cleaned.log`

Module names and validity of declaration files of run-time info without code analysis tools.

Log codes:
- `OK`: Valid declaration file
- `EMPTY`: Empty declaration file
- `NON-EXISTENT`: Non-existent declaration file

Format: `moduleName - logCode`

Amount of valid run-time info files: 1243

## 11_compare

### `comparison.csv`

Comparison of all generated declaration files with their counter parts of DefinitelyTyped.

Format: `ModuleName,Template,template-is-different,type-solvable-difference,type-unsolvable-difference,extra-parameter,missing-parameter,function-missing,function-extra,function-overloading-difference,export-assignment-is-different`

### `differences/<module>.json`

Comparison of each generated declaration files with its counter part of DefinitelyTyped in JSON format.