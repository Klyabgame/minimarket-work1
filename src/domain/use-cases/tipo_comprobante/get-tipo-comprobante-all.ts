import { TipoComprobanteEntity } from "../../entitys/tipoComprobante.entity";
import { TipoComprobanteRepository } from "../../repository";


export interface GetTipoComprobanteAllUseCase{
    execute():Promise<TipoComprobanteEntity[]>
}

export class GetTipoComprobanteAll implements GetTipoComprobanteAllUseCase{

    constructor(
        private readonly repository:TipoComprobanteRepository,
    ){}

    execute(): Promise<TipoComprobanteEntity[]> {
        return this.repository.getTipoComprobanteAll();
    }

}