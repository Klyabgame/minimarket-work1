import { CreateTipoProductDto, TipoProductDatasource, UpdateTipoProductDto } from "../../domain";
import { TipoProductEntity } from "../../domain/entitys/tipoProduct.entity";


export class TipoProductDatasourceImpl implements TipoProductDatasource{
    getTipoProductAll(): Promise<TipoProductEntity[]> {
        throw new Error("Method not implemented.");
    }
    getTipoProductOne(id: string): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    postRegisterTipoProduct(createTipoProductDto: CreateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    putTipoProduct(updateTipoProductDto: UpdateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    deleteTipoProduct(id: string): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    
    postRegisterMarca(createTipoProductDto: CreateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    putMarca(updateTipoProductDto: UpdateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }

}