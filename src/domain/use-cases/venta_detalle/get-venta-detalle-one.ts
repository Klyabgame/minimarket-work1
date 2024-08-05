import { VentaDetalleEntity } from "../../entitys/venta-detalle.entity";
import { VentaDetalleRepository } from "../../repository";


export interface GetVentaDetalleOneUseCase{
    execute(id:string):Promise<VentaDetalleEntity>
}

export class GetVentaDetalleOne implements GetVentaDetalleOneUseCase{

    constructor(
        private readonly repository:VentaDetalleRepository,
    ){}

    execute(id:string): Promise<VentaDetalleEntity> {
        return this.repository.getVentaDetalleOne(id);
    }

}