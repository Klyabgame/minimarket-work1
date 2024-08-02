import { CreateTipoProductDto, UpdateTipoProductDto } from "../dtos";
import { TipoProductEntity } from "../entitys/tipoProduct.entity";

export abstract class TipoProductDatasource{

    abstract getTipoProductAll():Promise<TipoProductEntity[]>;
    abstract getTipoProductOne(id:string):Promise<TipoProductEntity>;
    abstract postRegisterTipoProduct(createTipoProductDto:CreateTipoProductDto):Promise<TipoProductEntity>;
    abstract putTipoProduct(updateTipoProductDto:UpdateTipoProductDto):Promise<TipoProductEntity>;
    abstract deleteTipoProduct(id:string):Promise<TipoProductEntity>;
  
  }