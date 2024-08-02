
import { MarcaEntity } from "../../entitys/marca.entity";
import { MarcaRepository } from "../../repository";


export interface GetMarcaOneUseCase{
    execute(id:string):Promise<MarcaEntity>
}

export class GetMarcaOne implements GetMarcaOneUseCase{

    constructor(
        private readonly repository:MarcaRepository,
    ){}

    execute(id:string): Promise<MarcaEntity> {
        return this.repository.getMarcaOne(id);
    }

}