import { BufferOptions, TDocumentDefinitions } from "pdfmake/interfaces";

export interface PrinterInterface {

    createPdf(
        docDefinition: TDocumentDefinitions, 
        options?: BufferOptions): PDFKit.PDFDocument;
}
