import { TipoComprobanteEntity } from "../../entitys/tipoComprobante.entity";
import { TipoComprobanteRepository } from "../../repository";


export interface GetTipoComprobanteOneUseCase{
    execute(id:string):Promise<TipoComprobanteEntity>
}

export class GetTipoComprobanteOne implements GetTipoComprobanteOneUseCase{

    constructor(
        private readonly repository:TipoComprobanteRepository,
    ){}

    execute(id:string): Promise<TipoComprobanteEntity> {
        return this.repository.getTipoComprobanteOne(id);
    }

}