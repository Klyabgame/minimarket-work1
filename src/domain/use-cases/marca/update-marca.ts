import { UpdateMarcaDto } from "../../dtos";
import { MarcaEntity } from "../../entitys/marca.entity";
import { MarcaRepository } from "../../repository";


export interface UpdateMarcaUseCase{
    execute(dto:UpdateMarcaDto):Promise<MarcaEntity>
}

export class UpdateMarca implements UpdateMarcaUseCase{

    constructor(
        private readonly repository:MarcaRepository,
    ){}

    execute(dto: UpdateMarcaDto): Promise<MarcaEntity> {
        return this.repository.putMarca(dto);
    }

}