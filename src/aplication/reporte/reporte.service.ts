import PdfPrinter from 'pdfmake';
import type{ TDocumentDefinitions } from 'pdfmake/interfaces';
import { PrinterInterface } from '../interface/printerInterface';


export class ReporteService {

  constructor(
    private readonly printerInterface:PrinterInterface
  ){}

  createReport(docDefinition: TDocumentDefinitions):PDFKit.PDFDocument{
      return this.printerInterface.createPdf(docDefinition);
  }

}