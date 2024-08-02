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
        return this.marcaDatasource.getMarcaOne(id);
    }
    
    postRegisterMarca(createMarcaDto: CreateMarcaDto): Promise<MarcaEntity> {
        return this.marcaDatasource.postRegisterMarca(createMarcaDto);
    }
    putMarca(updateMarcaDto: UpdateMarcaDto): Promise<MarcaEntity> {
        return this.marcaDatasource.putMarca(updateMarcaDto);
    }
    
    deleteMarca(id: string): Promise<MarcaEntity> {
        return this.marcaDatasource.deleteMarca(id);
    }
}