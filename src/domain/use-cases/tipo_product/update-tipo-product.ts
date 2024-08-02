import {  UpdateTipoProductDto } from "../../dtos";
import { TipoProductEntity } from "../../entitys/tipoProduct.entity";
import {  TipoProductRepository } from "../../repository";


export interface UpdateTipoProductUseCase{
    execute(dto:UpdateTipoProductDto):Promise<TipoProductEntity>
}

export class UpdateTipoProduct implements UpdateTipoProductUseCase{

    constructor(
        private readonly repository:TipoProductRepository,
    ){}

    execute(dto: UpdateTipoProductDto): Promise<TipoProductEntity> {
        return this.repository.putTipoProduct(dto);
    }

}