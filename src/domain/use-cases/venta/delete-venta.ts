import { VentaEntity } from "../../entitys/venta.entity";
import { VentaRepository } from "../../repository";


export interface DeleteVentaUseCase{
    execute(id:string):Promise<VentaEntity>
}

export class DeleteVenta implements DeleteVentaUseCase{

    constructor(
        private readonly repository:VentaRepository,
    ){}

    execute(id:string): Promise<VentaEntity> {
        return this.repository.deleteVenta(id);
    }

}