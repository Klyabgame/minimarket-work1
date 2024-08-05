import { UpdateVentaDetalleDto } from "../../dtos/venta_detallle";
import { VentaDetalleEntity } from "../../entitys/venta-detalle.entity";
import { VentaDetalleRepository } from "../../repository";


export interface UpdateVentaDetalleUseCase{
    execute(dto:UpdateVentaDetalleDto):Promise<VentaDetalleEntity>
}

export class UpdateVentaDetalle implements UpdateVentaDetalleUseCase{

    constructor(
        private readonly repository:VentaDetalleRepository,
    ){}

    execute(dto: UpdateVentaDetalleDto): Promise<VentaDetalleEntity> {
        return this.repository.putVentaDetalle(dto);
    }

}