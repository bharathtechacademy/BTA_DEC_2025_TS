import data from '../../fixtures/testdata.json' with { type: 'json' };

export type testData = {
    testName: string,
    data: any
}

export function getData(testcase: string): any {
    const entries = data as testData[];
    const entry = entries.find((item) => item.testName === testcase);
    if (!entry) {
        throw new Error("Test Data Not Found");
    }
    return entry.data;
}
