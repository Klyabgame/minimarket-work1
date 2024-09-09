import { Request, Response } from "express";
import {  ReporteService } from "../../aplication";
import type{ TDocumentDefinitions } from "pdfmake/interfaces";
import { PdfPrinterImpl } from "../../infrastructure/reporte/pdfPrinter.impl";
import { getHelloWorldReport } from "../../aplication/reporte/reporte-definition";



export class ReportController {

    constructor(
        private readonly pdfPrinterImpl:PdfPrinterImpl
    ){
        this.hello=this.hello.bind(this);
    }

    hello(req:Request,res:Response){

        const docDefinition:TDocumentDefinitions = getHelloWorldReport();
          /* const options = {
            // ...
          } */

          const doc=this.pdfPrinterImpl.createPdf(docDefinition);
          res.setHeader('Content-Type','application/pdf');
          doc.pipe(res)
          doc.end();
    }
}