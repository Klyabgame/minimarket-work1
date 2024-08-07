import { Router } from "express"
import { VentaDetalleController } from "./controller";
import { VentaDetalleRepositoryImpl,  } from "../../infrastructure/repository";
import { VentaDetalleDatasourceImpl } from "../../infrastructure/datasource";

export class VentaDetalleRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();


        const VentaDetalleDatasource=new VentaDetalleDatasourceImpl();
        const ventaDetalleRepository=new VentaDetalleRepositoryImpl(VentaDetalleDatasource);
        const ventaDetalleController=new VentaDetalleController(ventaDetalleRepository);

        router.get('/',ventaDetalleController.getVentaDetalleAll);
        router.get('/:id',ventaDetalleController.getVentaDetalleOne);

        router.post('/register',ventaDetalleController.registerVentaDetalle);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.put('/:id',ventaDetalleController.updateVentaDetalle);

        router.delete('/:id',ventaDetalleController.deleteVentaDetalle);


        return router;
    }
}