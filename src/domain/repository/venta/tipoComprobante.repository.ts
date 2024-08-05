import { CreateTipoComprobanteDto, UpdateTipoComprobanteDto } from "../../dtos/tipo_comprobante";
import { TipoComprobanteEntity } from "../../entitys/tipoComprobante.entity";

export abstract class TipoComprobanteRepository{

    abstract getTipoComprobanteAll():Promise<TipoComprobanteEntity[]>;
    abstract getTipoComprobanteOne(id:string):Promise<TipoComprobanteEntity>;
    abstract postRegisterTipoComprobante(createTipoComprobanteDto:CreateTipoComprobanteDto):Promise<TipoComprobanteEntity>;
    abstract putTipoComprobante(updateTipoComprobanteDto:UpdateTipoComprobanteDto):Promise<TipoComprobanteEntity>;
    abstract deleteTipoComprobante(id:string):Promise<TipoComprobanteEntity>;
  
  
  }