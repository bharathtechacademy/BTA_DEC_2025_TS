import data from '../../fixtures/testdata.json' with { type: 'json' };

//sample object to get the data
export type testData = {
    testName: string,
    data: any
}


//function to get the data based on the test name
export function getData(testcase: string):any {
  const entries = data as testData[];
  const entry = entries.find((item) => item.testName === testcase);
  if(!entry){
    throw new Error("Test Data Not Found");    
  }
  return entry.data;

}