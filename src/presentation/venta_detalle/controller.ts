import { Request, Response } from "express";
import { CustomError, VentaRepository} from "../../domain";
import { UUID } from "../../config";
import { CreateVenta, DeleteVenta, GetVentaAll, GetVentaOne, UpdateVenta } from "../../domain/use-cases/venta";
import { CreateVentaDto, UpdateVentaDto } from "../../domain/dtos/venta";



export class VentaController {

    constructor(
        private readonly ventaRepository:VentaRepository,
    ){

        this.handleError=this.handleError.bind(this);

        this.getVentaAll=this.getVentaAll.bind(this);
        this.getVentaOne=this.getVentaOne.bind(this);
        this.registerVenta=this.registerVenta.bind(this);
        this.updateVenta=this.updateVenta.bind(this);
        this.deleteVenta=this.deleteVenta.bind(this);

        
    }

    private handleError=(error:unknown, res:Response)=>{
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error:error.message});
        }

        console.log(`${error}`);
        return res.status(500).json({error:'Internal server Error'});
        
    }

    public getVentaAll(req:Request, res:Response){

        new GetVentaAll(this.ventaRepository)
        .execute()
        .then(data=>res.status(200).json({VentaAll:data}))
        .catch(error=> this.handleError(error,res));

    }

    public getVentaOne(req:Request, res:Response){

        const idVenta=req.params.id;

        new GetVentaOne(this.ventaRepository)
        .execute(idVenta)
        .then(data=>res.status(200).json({ventaOne:data}))
        .catch(error=> this.handleError(error,res));
    }


    public registerVenta(req:Request, res:Response){

        const [error,createVentaDto]= CreateVentaDto.create({
            ...req.body,
            id_venta:UUID()
        })

        new CreateVenta(this.ventaRepository)
        .execute(createVentaDto!)
        .then(data=>res.status(200).json({VentaRegistrado:data}))
        .catch(error=> this.handleError(error,res));
        
    }

    public updateVenta(req:Request, res:Response){

        const idVenta=req.params.id;
        const [error,updateVentaDto]=UpdateVentaDto.create({
            ...req.body,
            id_venta:idVenta
        })

        new UpdateVenta(this.ventaRepository)
        .execute(updateVentaDto!)
        .then(data=>res.status(200).json({ventaUpdate:data}))
        .catch(error=> this.handleError(error,res));
        
    }

    public deleteVenta(req:Request, res:Response){

        const idVenta=req.params.id;

        new DeleteVenta(this.ventaRepository)
        .execute(idVenta)
        .then(data=>res.status(200).json({ventaDelete:data}))
        .catch(error=> this.handleError(error,res));

    }


    
}