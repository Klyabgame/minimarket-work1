import { Router } from "express"
import { ProductController } from "./controller";

export class ProductRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();


        const productController=new ProductController();

        router.get('/',productController.getProductAll);
        router.get('/:id',productController.getProductOne);

        router.post('/register',productController.registerProduct);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.put('/:id',productController.updateProduct);

        router.delete('/:id',productController.deleteProduct);


        return router;
    }
}