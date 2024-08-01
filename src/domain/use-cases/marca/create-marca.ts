import { CreateMarcaDto } from "../../dtos";
import { MarcaEntity } from "../../entitys/marca.entity";
import { MarcaRepository } from "../../repository";


export interface CreateMarcaUseCase{
    execute(dto:CreateMarcaDto):Promise<MarcaEntity>
}

export class CreateMarca implements CreateMarcaUseCase{

    constructor(
        private readonly repository:MarcaRepository,
    ){}

    execute(dto: CreateMarcaDto): Promise<MarcaEntity> {
        return this.repository.postRegisterMarca(dto);
    }

}