import { test } from '@playwright/test';
import { JMeterCommons } from '../../commons/jmeter/JmeterCommons.js';

test.describe('Load tests', () => {

    let jmeter: JMeterCommons;

    //initialize all common functions from JMeterCommons
    test.beforeEach(async () => {
        jmeter = new JMeterCommons();
    });

    //Test Case : Validate the performance test results
    test('Validate the API load test', async () => {
        await jmeter.runJmeterTestPlan("LoadTest.jmx");
    });

});