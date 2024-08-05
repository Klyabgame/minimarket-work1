import { VentaEntity } from "../../entitys/venta.entity";
import { VentaRepository } from "../../repository";


export interface GetVentaAllUseCase{
    execute():Promise<VentaEntity[]>
}

export class GetVentaAll implements GetVentaAllUseCase{

    constructor(
        private readonly repository:VentaRepository,
    ){}

    execute(): Promise<VentaEntity[]> {
        return this.repository.getVentaAll();
    }

}