import { Router } from "express"
import { VentaController } from "./controller";
import { VentaRepositoryImpl } from "../../infrastructure/repository";
import { VentaDatasourceImpl } from "../../infrastructure/datasource";

export class VentaDetalleRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();


        const VentaDatasource=new VentaDatasourceImpl();
        const ventaRepository=new VentaRepositoryImpl(VentaDatasource);
        const ventaController=new VentaController(ventaRepository);

        router.get('/',ventaController.getVentaAll);
        router.get('/:id',ventaController.getVentaOne);

        router.post('/register',ventaController.registerVenta);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.put('/:id',ventaController.updateVenta);

        router.delete('/:id',ventaController.deleteVenta);


        return router;
    }
}