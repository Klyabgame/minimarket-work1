import { VentaEntity } from "../../entitys/venta.entity";
import { VentaRepository } from "../../repository";


export interface GetVentaOneUseCase{
    execute(id:string):Promise<VentaEntity>
}

export class GetVentaOne implements GetVentaOneUseCase{

    constructor(
        private readonly repository:VentaRepository,
    ){}

    execute(id:string): Promise<VentaEntity> {
        return this.repository.getVentaOne(id);
    }

}