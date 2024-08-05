import { TipoComprobanteDatasource, TipoComprobanteRepository } from "../../../domain";
import { CreateTipoComprobanteDto, UpdateTipoComprobanteDto } from "../../../domain/dtos/tipo_comprobante";
import { TipoComprobanteEntity } from "../../../domain/entitys/tipoComprobante.entity";


export  class TipoComprobanteRepositoryImpl implements TipoComprobanteRepository{
  constructor(
    private readonly tipoComprobanteDatasource:TipoComprobanteDatasource,
) {}

  getTipoComprobanteAll(): Promise<TipoComprobanteEntity[]> {
    return this.tipoComprobanteDatasource.getTipoComprobanteAll();
  }
  getTipoComprobanteOne(id: string): Promise<TipoComprobanteEntity> {
    return this.tipoComprobanteDatasource.getTipoComprobanteOne(id);
  }
  postRegisterTipoComprobante(createTipoComprobanteDto: CreateTipoComprobanteDto): Promise<TipoComprobanteEntity> {
    return this.tipoComprobanteDatasource.postRegisterTipoComprobante(createTipoComprobanteDto);
  }
  putTipoComprobante(updateTipoComprobanteDto: UpdateTipoComprobanteDto): Promise<TipoComprobanteEntity> {
    return this.tipoComprobanteDatasource.putTipoComprobante(updateTipoComprobanteDto);
  }
  deleteTipoComprobante(id: string): Promise<TipoComprobanteEntity> {
    return this.tipoComprobanteDatasource.deleteTipoComprobante(id);
  }


  
  
  }