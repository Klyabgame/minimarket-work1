import { Router } from "express"
import { AuthRoutes } from "./auth/route";
import { ProductRoutes } from "./products/route";
import { TipoProductRoutes } from "./tipo_product/route";
import { MarcaRoutes } from "./marca/route";

export class MainRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();

        router.use('/api/auth',AuthRoutes.routes);
        router.use('/api/product',ProductRoutes.routes);
        router.use('/api/marca',MarcaRoutes.routes);
        router.use('/api/tipo-product',TipoProductRoutes.routes);

        return router;
    }
}