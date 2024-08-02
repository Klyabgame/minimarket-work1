
import { TipoProductEntity } from "../../entitys/tipoProduct.entity";
import {  TipoProductRepository } from "../../repository";


export interface GetAllTipoProductUseCase{
    execute():Promise<TipoProductEntity[]>
}

export class  GetAllTipoProduct implements  GetAllTipoProductUseCase{

    constructor(
        private readonly repository:TipoProductRepository,
    ){}

    execute(): Promise<TipoProductEntity[]> {
        return this.repository.getTipoProductAll();
    }

}