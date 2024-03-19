import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { NgFor } from '@angular/common';
import 'bootstrap/dist/css/bootstrap.css';
import './app.component.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularapp';

  ExcelData: any;
  headers: any[] = []; // Initialize with an empty array
  headerKeys: any[] = []; // Initialize with an empty array (assuming you kept this line)

  ReadExcel(event: any) {

    let file = event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {

      var workbook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workbook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

      // Extract header names from the first data object (assuming this happens inside onload)
      this.headers = Object.keys(this.ExcelData[0]);

      // Create an array of keys for dynamic data access (assuming you kept this line)
      this.headerKeys = Object.keys(this.ExcelData[0]);
    }
  }
}
