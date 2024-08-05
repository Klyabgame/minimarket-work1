import { CreateTipoComprobanteDto } from "../../dtos/tipo_comprobante";
import { TipoComprobanteEntity } from "../../entitys/tipoComprobante.entity";
import { TipoComprobanteRepository } from "../../repository";


export interface CreateTipoComprobanteUseCase{
    execute(dto:CreateTipoComprobanteDto):Promise<TipoComprobanteEntity>
}

export class CreateTipoComprobante implements CreateTipoComprobanteUseCase{

    constructor(
        private readonly repository:TipoComprobanteRepository,
    ){}

    execute(dto: CreateTipoComprobanteDto): Promise<TipoComprobanteEntity> {
        return this.repository.postRegisterTipoComprobante(dto);
    }

}