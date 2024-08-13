/* import PdfPrinter from 'pdfmake';
import fs from 'fs';
const fonts = {
    Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
};

export class ReporteService {

    constructor(){}

  const printer = new PdfPrinter(fonts);
  
  const docDefinition = {
    // ...
  };
  const options = {
    // ...
  }
  
  const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
  pdfDoc.pipe(fs.createWriteStream('document.pdf'));
  pdfDoc.end();
  

} */