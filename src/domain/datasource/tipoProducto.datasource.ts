import { CreateTipoProductDto, UpdateTipoProductDto } from "../dtos";
import { TipoProductEntity } from "../entitys/tipoProduct.entity";

export abstract class TipoProductDatasource{

    abstract postRegisterMarca(createTipoProductDto:CreateTipoProductDto):Promise<TipoProductEntity>;
    abstract putMarca(updateTipoProductDto:UpdateTipoProductDto):Promise<TipoProductEntity>;
  
  
  }