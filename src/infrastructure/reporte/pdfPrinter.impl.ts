import { TDocumentDefinitions, BufferOptions } from "pdfmake/interfaces";
import { PrinterInterface } from "../../aplication";
import PdfPrinter from "pdfmake";

const fonts = {
    Roboto: {
    normal: './public/assets/Roboto-Regular.ttf',
    bold: './public/assets/Roboto-Medium.ttf',
    italics: './public/assets/Roboto-Italic.ttf',
    bolditalics: './public/assets/Roboto-MediumItalic.ttf'
    }
};


export class PdfPrinterImpl implements PrinterInterface{

    private printer:PdfPrinter= new PdfPrinter(fonts);

    createPdf(docDefinition: TDocumentDefinitions, options?: BufferOptions): PDFKit.PDFDocument {
        return this.printer.createPdfKitDocument(docDefinition,options);
    }

}