import { TipoComprobanteEntity } from "../../entitys/tipoComprobante.entity";
import {TipoComprobanteRepository } from "../../repository";


export interface DeleteTipoComprobanteUseCase{
    execute(id:string):Promise<TipoComprobanteEntity>
}

export class DeleteTipoComprobante implements DeleteTipoComprobanteUseCase{

    constructor(
        private readonly repository:TipoComprobanteRepository,
    ){}

    execute(id:string): Promise<TipoComprobanteEntity> {
        return this.repository.deleteTipoComprobante(id);
    }

}