import { Request, Response } from "express";
import { CustomError} from "../../domain";



export class ProductController {

    constructor(

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

        res.json("getProductAll");

    }

    public getProductOne(req:Request, res:Response){

        res.json("getProductone");
    }


    public registerProduct(req:Request, res:Response){

        res.json("registerProductAll");
        
    }

    public updateProduct(req:Request, res:Response){

        res.json("updateProductAll");
        
    }

    public deleteProduct(req:Request, res:Response){
        res.json("deleteProductAll");

        
    }


    
}