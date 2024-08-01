import { Request, Response } from "express";
import { CreateMarcaDto, CustomError, MarcaRepository} from "../../domain";
import { UUID } from "../../config";
import { CreateMarca } from "../../domain/use-cases/marca";
import { GetMarcaAll } from "../../domain/use-cases/marca/get-marca-all";



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
            res.status(200).json({marcas:data})
        )   

    }

    public getMarcaOne(req:Request, res:Response){

        res.json("getPmarcactone");
    }


    public registerMarca(req:Request, res:Response){

        const [error,createMarcaDto]=CreateMarcaDto.create({
            ...req.body,
            id_marca:UUID()
        });

        new CreateMarca(this.marcaRepository)
        .execute(createMarcaDto!)
        .then(data=>
            
        )
        

        

        res.json("registermarcaductAll");
        
    }

    public updateMarca(req:Request, res:Response){

        res.json("updatePmarcauctAll");
        
    }

    public deleteMarca(req:Request, res:Response){
        res.json("deletePmarcauctAll");

        
    }


    
}