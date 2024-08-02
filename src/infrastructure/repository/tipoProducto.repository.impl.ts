import { CreateTipoProductDto, TipoProductDatasource, TipoProductRepository, UpdateTipoProductDto } from "../../domain";
import { TipoProductEntity } from "../../domain/entitys/tipoProduct.entity";


export class TipoProductRepositoryImpl implements TipoProductRepository{

    constructor(
        private readonly tipoProductDatasource:TipoProductDatasource,
    ) {}

    getTipoProductAll(): Promise<TipoProductEntity[]> {
        throw new Error("Method not implemented.");
    }
    getTipoProductOne(id: string): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    deleteTipoProduct(id: string): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    postRegisterTipoProduct(createTipoProductDto: CreateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    putTipoProduct(updateTipoProductDto: UpdateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }


}