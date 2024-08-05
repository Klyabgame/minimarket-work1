import { TipoComprobanteDatasource } from "../../../domain";
import { CreateTipoComprobanteDto, UpdateTipoComprobanteDto } from "../../../domain/dtos/tipo_comprobante";
import { TipoComprobanteEntity } from "../../../domain/entitys/tipoComprobante.entity";


export  class TipoComprobanteDatasourceImpl implements TipoComprobanteDatasource{
  getTipoComprobanteAll(): Promise<TipoComprobanteEntity[]> {
    throw new Error("Method not implemented.");
  }
  getTipoComprobanteOne(id: string): Promise<TipoComprobanteEntity> {
    throw new Error("Method not implemented.");
  }
  postRegisterTipoComprobante(createTipoComprobanteDto: CreateTipoComprobanteDto): Promise<TipoComprobanteEntity> {
    throw new Error("Method not implemented.");
  }
  putTipoComprobante(updateTipoComprobanteDto: UpdateTipoComprobanteDto): Promise<TipoComprobanteEntity> {
    throw new Error("Method not implemented.");
  }
  deleteTipoComprobante(id: string): Promise<TipoComprobanteEntity> {
    throw new Error("Method not implemented.");
  }


  
  
  }