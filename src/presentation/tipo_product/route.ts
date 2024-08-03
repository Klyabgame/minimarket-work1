import { Router } from "express"
import { TipoProductController } from "./controller";
import { TipoProductRepositoryImpl } from "../../infrastructure/repository";
import { TipoProductDatasourceImpl } from "../../infrastructure/datasource";

export class TipoProductRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();


        const tipoProductDatasource=new TipoProductDatasourceImpl();
        const tipoProductRepository=new TipoProductRepositoryImpl(tipoProductDatasource);
        const tipoProductController=new TipoProductController(tipoProductRepository);

        router.get('/',tipoProductController.getTipoProductAll);
        router.get('/:id',tipoProductController.getTipoProductOne);

        router.post('/register',tipoProductController.registerTipoProduct);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.put('/:id',tipoProductController.updateTipoProduct);

        router.delete('/:id',tipoProductController.deleteTipoProduct);


        return router;
    }
}