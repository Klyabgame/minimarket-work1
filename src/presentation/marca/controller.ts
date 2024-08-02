import { Request, Response } from "express";
import { CreateMarcaDto, CustomError, MarcaRepository, UpdateMarcaDto} from "../../domain";
import { UUID } from "../../config";
import { CreateMarca, DeleteMarca, GetMarcaAll, GetMarcaOne, UpdateMarca } from "../../domain/use-cases/marca";



export class MarcaController {

    constructor(
        private readonly marcaRepository:MarcaRepository,

    ){

        this.handleError=this.handleError.bind(this);

        this.getMarcaAll=this.getMarcaAll.bind(this);
        this.getMarcaOne=this.getMarcaOne.bind(this);
        this.registerMarca=this.registerMarca.bind(this);
        this.updateMarca=this.updateMarca.bind(this);
        this.deleteMarca=this.deleteMarca.bind(this);

        
    }

    private handleError=(error:unknown, res:Response)=>{
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error:error.message});
        }

        console.log(`${error}`);
        return res.status(500).json({error:'Internal server Error'});
        
    }

    public getMarcaAll(req:Request, res:Response){

        
        new GetMarcaAll(this.marcaRepository)
        .execute()
        .then(data=>
            res.status(200).json({marcas:data}))
        .catch(error => this.handleError(error,res));   

    }

    public getMarcaOne(req:Request, res:Response){
        const idMarca=req.params.id;
        
        new GetMarcaOne(this.marcaRepository)
        .execute(idMarca)
        .then(data=>
        {
            return res.status(200).json({oneMarca:data})
        }
        )
        .catch(error => {
            return this.handleError(error,res)
        }); 
    }


    public registerMarca(req:Request, res:Response){

        const [error,createMarcaDto]=CreateMarcaDto.create({
            ...req.body,
            id_marca:UUID()
        });

        new CreateMarca(this.marcaRepository)
        .execute(createMarcaDto!)
        .then(data=> res.status(200).json({newMarca:data}))
        .catch(error => this.handleError(error,res));
        
    }

    public updateMarca(req:Request, res:Response){
        const idMarca=req.params.id;
        const [error,updateMarcaDTO]= UpdateMarcaDto.create({
            ...req.body,
            id_marca:idMarca
        });

        new UpdateMarca(this.marcaRepository)
        .execute(updateMarcaDTO!)
        .then(data=>
            res.status(200).json({updateMarca:data})
        )
        .catch(error => this.handleError(error,res));
        
    }

    public deleteMarca(req:Request, res:Response){

        const idMarca=req.params.id;

        new DeleteMarca(this.marcaRepository)
        .execute(idMarca)
        .then(data=>
            res.status(200).json({deleteMarca:data})
        )
        .catch(error => this.handleError(error,res));

    }


    
}