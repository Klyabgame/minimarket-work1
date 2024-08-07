import { Request, Response } from "express";
import { CustomError,TipoComprobanteRepository} from "../../domain";
import { UUID } from "../../config";
import { CreateTipoComprobante, DeleteTipoComprobante, GetTipoComprobanteAll, GetTipoComprobanteOne, UpdateTipoComprobante } from "../../domain/use-cases/tipo_comprobante";
import { CreateTipoComprobanteDto, UpdateTipoComprobanteDto } from "../../domain/dtos/tipo_comprobante";



export class TipoComprobanteController {

    constructor(
        private readonly tipoComprobanteRepository:TipoComprobanteRepository,

    ){

        this.handleError=this.handleError.bind(this);

        this.getTipoComprobanteAll=this.getTipoComprobanteAll.bind(this);
        this.getTipoComprobanteOne=this.getTipoComprobanteOne.bind(this);
        this.registerTipoComprobante=this.registerTipoComprobante.bind(this);
        this.updateTipoComprobante=this.updateTipoComprobante.bind(this);
        this.deleteTipoComprobante=this.deleteTipoComprobante.bind(this);

        
    }

    private handleError=(error:unknown, res:Response)=>{
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error:error.message});
        }

        console.log(`${error}`);
        return res.status(500).json({error:'Internal server Error'});
        
    }

    public getTipoComprobanteAll(req:Request, res:Response){

        
        new GetTipoComprobanteAll(this.tipoComprobanteRepository)
        .execute()
        .then(data=>
            res.status(200).json({tipoComprobanteAll:data}))
        .catch(error => this.handleError(error,res));   

    }

    public getTipoComprobanteOne(req:Request, res:Response){
        const idMarca=req.params.id;
        
        new GetTipoComprobanteOne(this.tipoComprobanteRepository)
        .execute(idMarca)
        .then(data=>
        {
            return res.status(200).json({tipoComprobanteOne:data})
        }
        )
        .catch(error => {
            return this.handleError(error,res)
        }); 
    }


    public registerTipoComprobante(req:Request, res:Response){

        const [error,createTipoComprobanteDto]=CreateTipoComprobanteDto.create({
            ...req.body,
            id_tipo_comprobante:UUID()
        });

        new CreateTipoComprobante(this.tipoComprobanteRepository)
        .execute(createTipoComprobanteDto!)
        .then(data=> res.status(200).json({tipoComprobanteRegistro:data}))
        .catch(error => this.handleError(error,res));
        
    }

    public updateTipoComprobante(req:Request, res:Response){
        const idTipoComprobante=req.params.id;
        const [error,updateTipoComprobanteDtoDTO]= UpdateTipoComprobanteDto.create({
            ...req.body,
            id_tipo_comprobante:idTipoComprobante
        });

        new UpdateTipoComprobante(this.tipoComprobanteRepository)
        .execute(updateTipoComprobanteDtoDTO!)
        .then(data=>
            res.status(200).json({tipoComprobanteUpdate:data})
        )
        .catch(error => this.handleError(error,res));
        
    }

    public deleteTipoComprobante(req:Request, res:Response){

        const idTipoComprobante=req.params.id;

        new DeleteTipoComprobante(this.tipoComprobanteRepository)
        .execute(idTipoComprobante)
        .then(data=>
            res.status(200).json({deleteTipoComprobante:data})
        )
        .catch(error => this.handleError(error,res));

    }


    
}