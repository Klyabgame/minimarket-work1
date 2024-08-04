import { Router } from "express"
import { ProductController } from "./controller";
import { ProductRepositoryImpl } from "../../infrastructure/repository";
import { ProductDatasourceImpl } from "../../infrastructure/datasource";

export class ProductRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();

        const productDatasource=new ProductDatasourceImpl();
        const productRepository=new ProductRepositoryImpl(productDatasource);
        const productController=new ProductController(productRepository);

        router.get('/',productController.getProductAll);
        router.get('/:id',productController.getProductOne);

        router.post('/register',productController.registerProduct);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.put('/:id',productController.updateProduct);

        router.delete('/:id',productController.deleteProduct);


        return router;
    }
}