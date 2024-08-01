import { CreateTipoProductDto, UpdateTipoProductDto } from "../dtos";
import { TipoProductEntity } from "../entitys/tipoProduct.entity";

export abstract class TipoProductRepository{

    abstract postRegisterTipoProduct(createTipoProductDto:CreateTipoProductDto):Promise<TipoProductEntity>;
    abstract putTipoProduct(updateTipoProductDto:UpdateTipoProductDto):Promise<TipoProductEntity>;
  
  
  }