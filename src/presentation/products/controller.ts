import { Request, Response } from "express";
import { CreateProductDto, CustomError, ProductRepository, UpdateProductDto} from "../../domain";
import { UUID } from "../../config";
import { CreateProduct, DeleteProduct, GetProductAll, GetProductOne, UpdateProduct } from "../../domain/use-cases/product";



export class ProductController {

    constructor(
        private readonly productRepository:ProductRepository,

    ){

        this.handleError=this.handleError.bind(this);

        this.getProductAll=this.getProductAll.bind(this);
        this.getProductOne=this.getProductOne.bind(this);
        this.registerProduct=this.registerProduct.bind(this);
        this.updateProduct=this.updateProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);

        
    }

    private handleError=(error:unknown, res:Response)=>{
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error:error.message});
        }

        console.log(`${error}`);
        return res.status(500).json({error:'Internal server Error'});
        
    }

    public getProductAll(req:Request, res:Response){

        new GetProductAll(this.productRepository)
        .execute()
        .then(data=>res.status(200).json({productAll:data}))
        .catch(error=>this.handleError(error,res));

    }

    public getProductOne(req:Request, res:Response){
        const idProduct=req.params.id;

        new GetProductOne(this.productRepository)
        .execute(idProduct)
        .then(data=>res.status(200).json({productOne:data}))
        .catch(error=>this.handleError(error,res));
    }


    public registerProduct(req:Request, res:Response){

        const [error,createProductDto]= CreateProductDto.create({
            ...req.body,
            id_product:UUID()
        });

        new CreateProduct(this.productRepository)
        .execute(createProductDto!)
        .then(data=>res.status(200).json({productRegister:data}))
        .catch(error=>this.handleError(error,res));
        
        
        
    }

    public updateProduct(req:Request, res:Response){

        const idProduct= req.params.id;
        const [error,updateProductDTO]=UpdateProductDto.create({
            ...req.body,
            id_product:idProduct
        })

        new UpdateProduct(this.productRepository)
        .execute(updateProductDTO!)
        .then(data=>res.status(200).json({productUpdate:data}))
        .catch(error=>this.handleError(error,res));
        
    }

    public deleteProduct(req:Request, res:Response){
        const idProduct= req.params.id;

        new DeleteProduct(this.productRepository)
        .execute(idProduct)
        .then(data=>res.status(200).json({productDelete:data}))
        .catch(error=>this.handleError(error,res));

        
    }
    
}