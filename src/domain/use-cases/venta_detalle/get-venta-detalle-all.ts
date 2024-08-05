import { VentaDetalleEntity } from "../../entitys/venta-detalle.entity";
import { VentaDetalleRepository } from "../../repository";


export interface GetVentaDetalleAllUseCase{
    execute():Promise<VentaDetalleEntity[]>
}

export class GetVentaDetalleAll implements GetVentaDetalleAllUseCase{

    constructor(
        private readonly repository:VentaDetalleRepository,
    ){}

    execute(): Promise<VentaDetalleEntity[]> {
        return this.repository.getVentaDetalleAll();
    }

}