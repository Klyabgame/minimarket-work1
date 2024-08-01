import { CreateMarcaDto } from "../../dtos";
import { MarcaEntity } from "../../entitys/marca.entity";
import { MarcaRepository } from "../../repository";


export interface GetMarcaAllUseCase{
    execute():Promise<MarcaEntity[]>
}

export class GetMarcaAll implements GetMarcaAllUseCase{

    constructor(
        private readonly repository:MarcaRepository,
    ){}

    execute(): Promise<MarcaEntity[]> {
        return this.repository.getMarcaAll();
    }

}