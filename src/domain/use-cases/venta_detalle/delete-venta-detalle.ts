import { VentaDetalleEntity } from "../../entitys/venta-detalle.entity";
import { VentaDetalleRepository } from "../../repository";


export interface DeleteVentaDetalleUseCase{
    execute(id:string):Promise<VentaDetalleEntity>
}

export class DeleteVentaDetalle implements DeleteVentaDetalleUseCase{

    constructor(
        private readonly repository:VentaDetalleRepository,
    ){}

    execute(id:string): Promise<VentaDetalleEntity> {
        return this.repository.deleteVentaDetalle(id);
    }

}