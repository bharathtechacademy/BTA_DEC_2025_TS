import * as fs from 'fs';
import * as xlsx from 'xlsx';

export class ExcelUtil {

static readExcelToJSON(filepath: string, sheetName: string): any {

let rowData : Record<string, any>[] = [];

//Verify whether the file exists. 
if(!fs.existsSync(filepath)) {
    throw new Error(`File not found at path: ${filepath}`);
}

//Read the workbook from the file. 
const workbook = xlsx.readFile(filepath);

//Read specific sheet from the workbook. 
const sheet = workbook.Sheets[sheetName];

//check whether sheet is available
if(!sheet){
    throw new Error ('Sheet not available');
}

//Convert the data available in the sheet into JSON. 
rowData = xlsx.utils.sheet_to_json(sheet,{defval:""});

return  rowData;

} 


}

