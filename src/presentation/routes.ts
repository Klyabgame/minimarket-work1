import { Router } from "express"
import { AuthRoutes } from "./auth/route";
import { ProductRoutes } from "./products/route";
import { TipoProductRoutes } from "./tipo_product/route";
import { MarcaRoutes } from "./marca/route";
import { VentaRoutes } from "./venta/route";
import { VentaDetalleRoutes } from "./venta_detalle/route";
import { TipoComprobanteRoutes } from "./tipo_comprobante/route";

export class MainRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();

        router.use('/api/auth',AuthRoutes.routes);
        router.use('/api/product',ProductRoutes.routes);
        router.use('/api/marca',MarcaRoutes.routes);
        router.use('/api/tipo-product',TipoProductRoutes.routes);
        router.use('/api/venta',VentaRoutes.routes);
        router.use('/api/venta-detalle',VentaDetalleRoutes.routes);
        router.use('/api/tipo-comprobante',TipoComprobanteRoutes.routes);

        return router;
    }
}