import { Router } from "express"
import { MarcaController } from "./controller";
import { MarcaRepositoryImpl } from "../../infrastructure/repository";
import { MarcaDatasourceImpl } from "../../infrastructure/datasource";

export class MarcaRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();

        const marcaDatasource=new MarcaDatasourceImpl();
        const marcaRepository=new MarcaRepositoryImpl(marcaDatasource);
        const marcaController=new MarcaController(marcaRepository);

        router.get('/',marcaController.getMarcaAll);
        router.get('/:id',marcaController.getMarcaOne);

        router.post('/register',marcaController.registerMarca);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.put('/:id',marcaController.updateMarca);

        router.delete('/:id',marcaController.deleteMarca);


        return router;
    }
}