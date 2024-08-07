import { Request, Response } from "express";
import { CustomError, VentaDetalleRepository} from "../../domain";
import { UUID } from "../../config";
import { CreateVentaDetalle, DeleteVentaDetalle, GetVentaDetalleAll, GetVentaDetalleOne, UpdateVentaDetalle } from "../../domain/use-cases/venta_detalle";
import { CreateVentaDetalleDto, UpdateVentaDetalleDto } from "../../domain/dtos/venta_detallle";



export class VentaDetalleController {

    constructor(
        private readonly ventaDetalleRepository:VentaDetalleRepository,
    ){

        this.handleError=this.handleError.bind(this);

        this.getVentaDetalleAll=this.getVentaDetalleAll.bind(this);
        this.getVentaDetalleOne=this.getVentaDetalleOne.bind(this);
        this.registerVentaDetalle=this.registerVentaDetalle.bind(this);
        this.updateVentaDetalle=this.updateVentaDetalle.bind(this);
        this.deleteVentaDetalle=this.deleteVentaDetalle.bind(this);

        
    }

    private handleError=(error:unknown, res:Response)=>{
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error:error.message});
        }

        console.log(`${error}`);
        return res.status(500).json({error:'Internal server Error'});
        
    }

    public getVentaDetalleAll(req:Request, res:Response){

        new GetVentaDetalleAll(this.ventaDetalleRepository)
        .execute()
        .then(data=>res.status(200).json({VentaDetalleAll:data}))
        .catch(error=> this.handleError(error,res));

    }

    public getVentaDetalleOne(req:Request, res:Response){

        const idVentaDetalle=req.params.id;

        new GetVentaDetalleOne(this.ventaDetalleRepository)
        .execute(idVentaDetalle)
        .then(data=>res.status(200).json({ventaDetalleOne:data}))
        .catch(error=> this.handleError(error,res));
    }


    public registerVentaDetalle(req:Request, res:Response){

        const [error,createVentaDetalleDto]= CreateVentaDetalleDto.create({
            ...req.body,
            id_venta_detalle:UUID()
        })

        new CreateVentaDetalle(this.ventaDetalleRepository)
        .execute(createVentaDetalleDto!)
        .then(data=>res.status(200).json({VentaDetalleRegistrado:data}))
        .catch(error=> this.handleError(error,res));
        
    }

    public updateVentaDetalle(req:Request, res:Response){

        const idVentaDetalle=req.params.id;
        const [error,updateVentaDetalleDto]=UpdateVentaDetalleDto.create({
            ...req.body,
            id_venta_detalle:idVentaDetalle
        })

        new UpdateVentaDetalle(this.ventaDetalleRepository)
        .execute(updateVentaDetalleDto!)
        .then(data=>res.status(200).json({ventaDetalleUpdate:data}))
        .catch(error=> this.handleError(error,res));
        
    }

    public deleteVentaDetalle(req:Request, res:Response){

        const idVentaDetalle=req.params.id;

        new DeleteVentaDetalle(this.ventaDetalleRepository)
        .execute(idVentaDetalle)
        .then(data=>res.status(200).json({ventaDetalleDelete:data}))
        .catch(error=> this.handleError(error,res));

    }


    
}