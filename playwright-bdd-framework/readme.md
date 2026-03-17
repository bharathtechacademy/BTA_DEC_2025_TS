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

# 5. Adding the folder structure to maintain different components of the framework. 
    1.commons ==> To maintain the common methods related to UI, API, Database, and Load Testing related stuff 
    2.config ==> To maintain the configuration data related to UI, API, database, and load testing 
    3.screenshots ==> To maintain the screenshots collected during the execution process 
    4.reports ==> To maintain the test results reports generated from the framework 
    5.utils ==> To maintain the utility-related programs and common methods like Excel utility, database utility, PDF utility, etc. 
    6.page-objects ==> To maintain page-wise elements and respective steps to implement page object model design pattern 

    7.features ==> To maintain the cucumber feature files related to each and every functionality 
    8.step-definitions ==> To maintain the step definitions for each and every step mentioned in the feature file 
    9.support ==> To maintain cucumber 'hooks'and cucumber 'world' configurations 