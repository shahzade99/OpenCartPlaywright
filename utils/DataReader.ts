import * as fs from 'fs';
/**
 * run ... tsc --init 
 * this will create tsconfig.json file
 * update under compilerOption of tsconfig file where "type":[] to "type":["node"]
 */

//import {parse} from "csv-parse/sync";
//import * as XLSX from 'XLSX';
export class DataProvider {

    //Json read method
    static readJson(filePath:string)
    {
        const raw = fs.readFileSync(filePath,'utf-8');
        return JSON.parse(raw)
    }

/*

    // read csv data
    static readCSV(filePath:string)
    {
        const raw = fs.readFileSync(filePath);
        return parseFloat(raw)
        skip_empty_lines:true
    }



    // read Excel file
    static readExcel(filePath:string)
    {
        const workbook = XLSX.readFile(filePath)
        const sheetName = workbook.sheetName[0]
        const workSheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(workSheet,{header:1})
    }

    */
}