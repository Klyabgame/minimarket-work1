
import { TipoProductEntity } from "../../entitys/tipoProduct.entity";
import {  TipoProductRepository } from "../../repository";


export interface GetOneTipoProductUseCase{
    execute(id:string):Promise<TipoProductEntity>
}

export class GetOneTipoProduct implements GetOneTipoProductUseCase{

    constructor(
        private readonly repository:TipoProductRepository,
    ){}

    execute(id: string): Promise<TipoProductEntity> {
        return this.repository.getTipoProductOne(id);
    }

}