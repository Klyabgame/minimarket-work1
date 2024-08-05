import { CreateVentaDetalleDto } from "../../dtos/venta_detallle";
import { VentaDetalleEntity } from "../../entitys/venta-detalle.entity";
import { VentaDetalleRepository } from "../../repository";


export interface CreateVentaDetalleUseCase{
    execute(dto:CreateVentaDetalleDto):Promise<VentaDetalleEntity>
}

export class CreateVentaDetalle implements CreateVentaDetalleUseCase{

    constructor(
        private readonly repository:VentaDetalleRepository,
    ){}

    execute(dto: CreateVentaDetalleDto): Promise<VentaDetalleEntity> {
        return this.repository.postRegisterVentaDetalle(dto);
    }

}