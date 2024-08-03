import { Request, Response } from "express";
import { CreateTipoProductDto, CustomError, TipoProductRepository, UpdateTipoProductDto} from "../../domain";
import { CreateTipoProduct, DeleteTipoProduct, GetAllTipoProduct, GetOneTipoProduct, UpdateTipoProduct } from "../../domain/use-cases/tipo_product";



export class TipoProductController {

    constructor(
        private readonly tipoProductRepository:TipoProductRepository,
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

        new GetAllTipoProduct(this.tipoProductRepository)
        .execute()
        .then(data=>console.log(data))
        .catch(error=> this.handleError(error,res));

    }

    public getTipoProductOne(req:Request, res:Response){

        const idTipoProduct=req.params.id;

        new GetOneTipoProduct(this.tipoProductRepository)
        .execute(idTipoProduct)
        .then(data=>console.log(data))
        .catch(error=> this.handleError(error,res));
    }


    public registerTipoProduct(req:Request, res:Response){

        const [error,createTipoProductDTO]= CreateTipoProductDto.create(req.body)

        new CreateTipoProduct(this.tipoProductRepository)
        .execute(createTipoProductDTO!)
        .then(data=>console.log(data))
        .catch(error=> this.handleError(error,res));
        
    }

    public updateTipoProduct(req:Request, res:Response){
        const idTipoProduct=req.params.id;
        const [error,updateTipoProductDTO]=UpdateTipoProductDto.create({
            ...req.body,
            id_tipo_product:idTipoProduct
        })

        new UpdateTipoProduct(this.tipoProductRepository)
        .execute(updateTipoProductDTO!)
        .then(data=>console.log(data))
        .catch(error=> this.handleError(error,res));
        
    }

    public deleteTipoProduct(req:Request, res:Response){

        const idTipoProduct=req.params.id;

        new DeleteTipoProduct(this.tipoProductRepository)
        .execute(idTipoProduct)
        .then(data=>console.log(data))
        .catch(error=> this.handleError(error,res));

    }


    
}