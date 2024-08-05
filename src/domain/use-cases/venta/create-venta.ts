import { CreateVentaDto } from "../../dtos/venta";
import { VentaEntity } from "../../entitys/venta.entity";
import { VentaRepository } from "../../repository";


export interface CreateVentaUseCase{
    execute(dto:CreateVentaDto):Promise<VentaEntity>
}

export class CreateVenta implements CreateVentaUseCase{

    constructor(
        private readonly repository:VentaRepository,
    ){}

    execute(dto: CreateVentaDto): Promise<VentaEntity> {
        return this.repository.postRegisterVenta(dto);
    }

}