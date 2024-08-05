import { UpdateVentaDto } from "../../dtos/venta";
import { VentaEntity } from "../../entitys/venta.entity";
import { VentaRepository } from "../../repository";


export interface UpdateVentaUseCase{
    execute(dto:UpdateVentaDto):Promise<VentaEntity>
}

export class UpdateVenta implements UpdateVentaUseCase{

    constructor(
        private readonly repository:VentaRepository,
    ){}

    execute(dto: UpdateVentaDto): Promise<VentaEntity> {
        return this.repository.putVenta(dto);
    }

}