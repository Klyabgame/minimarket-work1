import { Router } from "express"
import { TipoProductController } from "./controller";

export class TipoProductRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();


        const tipoProductController=new TipoProductController();

        router.get('/',tipoProductController.getTipoProductAll);
        router.get('/:id',tipoProductController.getTipoProductOne);

        router.post('/register',tipoProductController.registerTipoProduct);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.put('/:id',tipoProductController.updateTipoProduct);

        router.delete('/:id',tipoProductController.deleteTipoProduct);


        return router;
    }
}