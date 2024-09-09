import { Router } from "express"
import { ReportController } from "./controller";
import { PdfPrinterImpl } from "../../infrastructure/reporte/pdfPrinter.impl";


export class ReportRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();


        /* const VentaDatasource=new VentaDatasourceImpl();
        const ventaRepository=new VentaRepositoryImpl(VentaDatasource); */
        //const printerService= new PrinterService();
        const pdfPrinterImpl=new PdfPrinterImpl();
        const reportController=new ReportController(pdfPrinterImpl);

        router.get('/hello',reportController.hello);


        return router;
    }
}