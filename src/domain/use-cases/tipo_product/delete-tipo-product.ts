
import { TipoProductEntity } from "../../entitys/tipoProduct.entity";
import {  TipoProductRepository } from "../../repository";


export interface DeleteTipoProductUseCase{
    execute(id:string):Promise<TipoProductEntity>
}

export class DeleteTipoProduct implements DeleteTipoProductUseCase{

    constructor(
        private readonly repository:TipoProductRepository,
    ){}

    execute(id:string): Promise<TipoProductEntity> {
        return this.repository.deleteTipoProduct(id);
    }

}