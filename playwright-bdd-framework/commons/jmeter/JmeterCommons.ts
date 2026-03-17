
import { exec } from 'child_process';
import fs from 'fs';

export class JMeterCommons {

    //common method to execute command line and expect promise in return
    private executeCLICommand(command: string): Promise<string> {
        
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve('Command Line Executed Successfully');
            });
        });
    }


     async runJmeterTestPlan(jmxFile: string): Promise<void> {

        //Update relative path from project folder to get the JMeter utilities. 
        const projectRoot = process.cwd();
        const jmeterBasePath = `${projectRoot}/tests/performance/jmeter`;
        const jmeterBinPath = `${jmeterBasePath}/bin/jmeter.bat`;
        const testPlanPath = `${jmeterBasePath}/testplans/${jmxFile}`;
        //get the time stamp in ddMMyyyy_HHmmss format to create unique results and report for each test run
        const timestamp = new Date().getDate().toString();
        const resultsPath = `${jmeterBasePath}/results/TestResults_${timestamp}.csv`;
        const reportPath = `${jmeterBasePath}/report-output`;

        //Delete previous results and report if they exist
        
        if (fs.existsSync(resultsPath)) {  //if results file exists
            fs.unlinkSync(resultsPath); //delete it
        }
        if (fs.existsSync(reportPath)) { //if report folder exists
            fs.rmSync(reportPath, { recursive: true, force: true }); //delete it and its contents
        }

        //Run JMeter test plan using command line and generate CSV results        
        const commandToRunJmxFile = `"${jmeterBinPath}" -n -t "${testPlanPath}" -l "${resultsPath}"`;
        const result = await this.executeCLICommand(commandToRunJmxFile); //execute the command to run the JMX file and wait for it to complete
        console.log(result); //log the result of command execution

        //Generate JMeter report from CSV results using command line
        const commandToGenerateReport = `"${jmeterBinPath}" -g "${resultsPath}" -o "${reportPath}"`;
        const report = await this.executeCLICommand(commandToGenerateReport); //execute the command to generate the report and wait for it to complete
        console.log(report); //log the result of command execution

    }


}