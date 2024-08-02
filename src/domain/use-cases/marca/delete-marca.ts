
import { MarcaEntity } from "../../entitys/marca.entity";
import { MarcaRepository } from "../../repository";


export interface DeleteMarcaUseCase{
    execute(id:string):Promise<MarcaEntity>
}

export class DeleteMarca implements DeleteMarcaUseCase{

    constructor(
        private readonly repository:MarcaRepository,
    ){}

    execute(id:string): Promise<MarcaEntity> {
        return this.repository.deleteMarca(id);
    }

}