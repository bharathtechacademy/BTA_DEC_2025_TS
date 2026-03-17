import * as fs from 'fs';
import {PDFParse} from 'pdf-parse';

export class PdfUtil {

    //Common method to read text content from PDF file 
    static async readPdfContent(filePath: string): Promise<string> {

        //Verify file exists within the path. 
        if(!fs.existsSync(filePath)) {
            throw new Error(`File not found at path: ${filePath}`);
        }

        //Read the text from that particular file. 
        const buffer = fs.readFileSync(filePath);//convert the file into byte strem
        const result = await new PDFParse({data:buffer}).getText(); //extract the text using PDFParse class getText method

        return result.text;       

    }

    

}