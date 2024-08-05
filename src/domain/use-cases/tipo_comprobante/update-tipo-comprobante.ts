import { UpdateTipoComprobanteDto } from "../../dtos/tipo_comprobante";
import { TipoComprobanteEntity } from "../../entitys/tipoComprobante.entity";
import { TipoComprobanteRepository } from "../../repository";


export interface UpdateTipoComprobanteUseCase{
    execute(dto:UpdateTipoComprobanteDto):Promise<TipoComprobanteEntity>
}

export class UpdateTipoComprobante implements UpdateTipoComprobanteUseCase{

    constructor(
        private readonly repository:TipoComprobanteRepository,
    ){}

    execute(dto: UpdateTipoComprobanteDto): Promise<TipoComprobanteEntity> {
        return this.repository.putTipoComprobante(dto);
    }

}