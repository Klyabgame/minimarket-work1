import { Request, Response } from "express";
import { CustomError} from "../../domain";



export class TipoProductController {

    constructor(

    ){

        this.handleError=this.handleError.bind(this);

        this.getTipoProductAll=this.getTipoProductAll.bind(this);
        this.getTipoProductOne=this.getTipoProductOne.bind(this);
        this.registerTipoProduct=this.registerTipoProduct.bind(this);
        this.updateTipoProduct=this.updateTipoProduct.bind(this);
        this.deleteTipoProduct=this.deleteTipoProduct.bind(this);

        
    }

    private handleError=(error:unknown, res:Response)=>{
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error:error.message});
        }

        console.log(`${error}`);
        return res.status(500).json({error:'Internal server Error'});
        
    }

    public getTipoProductAll(req:Request, res:Response){

        res.json("getPrtipoPRoductotAll");

    }

    public getTipoProductOne(req:Request, res:Response){

        res.json("getPrtipoPRoductotone");
    }


    public registerTipoProduct(req:Request, res:Response){

        res.json("registertipoPRoductouctAll");
        
    }

    public updateTipoProduct(req:Request, res:Response){

        res.json("updattipoPRoductoductAll");
        
    }

    public deleteTipoProduct(req:Request, res:Response){
        res.json("deletetipoPRoductouctAll");

        
    }


    
}