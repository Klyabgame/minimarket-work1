import { CreateMarcaDto, MarcaDatasource, MarcaRepository, UpdateMarcaDto } from "../../domain";
import { MarcaEntity } from "../../domain/entitys/marca.entity";


export class MarcaRepositoryImpl implements MarcaRepository{

    constructor(
        private readonly marcaDatasource:MarcaDatasource,
    ) {}
    getMarcaAll(): Promise<MarcaEntity[]> {
        return this.marcaDatasource.getMarcaAll();
    }
    getMarcaOne(id: string): Promise<MarcaEntity> {
        throw new Error("Method not implemented.");
    }
    
    postRegisterMarca(createMarcaDto: CreateMarcaDto): Promise<MarcaEntity> {
        return this.marcaDatasource.postRegisterMarca(createMarcaDto);
    }
    putMarca(updateMarcaDto: UpdateMarcaDto): Promise<MarcaEntity> {
        throw new Error("Method not implemented.");
    }
    
    deleteMarca(id: string): Promise<MarcaEntity> {
        throw new Error("Method not implemented.");
    }
}