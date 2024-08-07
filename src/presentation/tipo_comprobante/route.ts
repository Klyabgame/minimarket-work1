import { Router } from "express"
import { TipoComprobanteController } from "./controller";
import { TipoComprobanteRepositoryImpl } from "../../infrastructure/repository";
import { TipoComprobanteDatasourceImpl } from "../../infrastructure/datasource";

export class TipoComprobanteRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();

        const tipoComprobanteDatasource=new TipoComprobanteDatasourceImpl();
        const tipoComprobanteRepository=new TipoComprobanteRepositoryImpl(tipoComprobanteDatasource);
        const tipoComprobanteController=new TipoComprobanteController(tipoComprobanteRepository);

        router.get('/',tipoComprobanteController.getTipoComprobanteAll);
        router.get('/:id',tipoComprobanteController.getTipoComprobanteOne);

        router.post('/register',tipoComprobanteController.registerTipoComprobante);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.put('/:id',tipoComprobanteController.updateTipoComprobante);

        router.delete('/:id',tipoComprobanteController.deleteTipoComprobante);


        return router;
    }
}