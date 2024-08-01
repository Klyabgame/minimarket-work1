import {  CreateTipoProductDto } from "../../dtos";
import { TipoProductEntity } from "../../entitys/tipoProduct.entity";
import {  TipoProductRepository } from "../../repository";


export interface CreateTipoProductUseCase{
    execute(dto:CreateTipoProductDto):Promise<TipoProductEntity>
}

export class CreateTipoProduct implements CreateTipoProductUseCase{

    constructor(
        private readonly repository:TipoProductRepository,
    ){}

    execute(dto: CreateTipoProductDto): Promise<TipoProductEntity> {
        return this.repository.postRegisterTipoProduct(dto);
    }

}