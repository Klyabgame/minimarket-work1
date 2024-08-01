import { CreateTipoProductDto, TipoProductDatasource, UpdateTipoProductDto } from "../../domain";
import { TipoProductEntity } from "../../domain/entitys/tipoProduct.entity";


export class TipoProductDatasourceImpl implements TipoProductDatasource{
    
    postRegisterMarca(createTipoProductDto: CreateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    putMarca(updateTipoProductDto: UpdateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }

}