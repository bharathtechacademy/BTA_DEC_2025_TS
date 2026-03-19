import { Given,When,Then } from "@cucumber/cucumber";
import { JMeterCommons } from "../../commons/jmeter/JmeterCommons.js";

let jmeter: JMeterCommons;

//Given Initialize the JMeter utility
Given('Initialize the JMeter utility', async () => {
    jmeter = new JMeterCommons();
});

//Then I run the JMeter test plan "LoadTest.jmx" and get the performance results
Then('I run the JMeter test plan {string} and get the performance results', async (testPlan: string) => {
    await jmeter.runJmeterTestPlan(testPlan);
});