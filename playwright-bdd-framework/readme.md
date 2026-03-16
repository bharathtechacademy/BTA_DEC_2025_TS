# 1. Creating a new local directory within your project. ==> playwright-bdd-framework

# 2. Install necessary dependencies based on our project requirements. 

 change directory => cd playwright-bdd-framework
    1. playwright : npm init playwright@latest
    2. cucumber : npm install @cucumber/cucumber
    3. typescript& ts-node : npm install typescript ts-node @types/node
    //initialize the tsconfig.json ==> npx tsc --init

    4.cucumber test results report : npm install cucumber-html-reporter
    5. excel : npm install excel xlsx
    6. pdf files : npm install pdf-parse
    7. postgresql DB : npm install pg @types/pg 

# 3. Setup the global configurations

    1. package.json ==>   "type":"module"
    2. tsconfig.json ==> "verbatimModuleSyntax": false

# 4. Add Cucumber configuration file

module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    loader: ['ts-node/esm'],
    import: ['support/**/*.ts', 'step-definitions/**/*.ts'],
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    publishQuiet: true
  }
};