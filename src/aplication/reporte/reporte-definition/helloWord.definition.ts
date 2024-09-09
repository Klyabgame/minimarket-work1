import type{ TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportOptions{
    name:string;
}


export const getHelloWorldReport=():TDocumentDefinitions=>{

    const docDefinition: TDocumentDefinitions = {
        content: [
            { text:'constancia de empleo', style:{bold:true}}
        ]
    }

    return docDefinition;
}