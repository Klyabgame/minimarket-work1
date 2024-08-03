import { CreateTipoProductDto, TipoProductDatasource, TipoProductRepository, UpdateTipoProductDto } from "../../domain";
import { TipoProductEntity } from "../../domain/entitys/tipoProduct.entity";


export class TipoProductRepositoryImpl implements TipoProductRepository{

    constructor(
        private readonly tipoProductDatasource:TipoProductDatasource,
    ) {}

    getTipoProductAll(): Promise<TipoProductEntity[]> {
        return this.tipoProductDatasource.getTipoProductAll();
    }
    getTipoProductOne(id: string): Promise<TipoProductEntity> {
        return this.tipoProductDatasource.getTipoProductOne(id);
    }
    deleteTipoProduct(id: string): Promise<TipoProductEntity> {
        return this.tipoProductDatasource.deleteTipoProduct(id);
    }
    postRegisterTipoProduct(createTipoProductDto: CreateTipoProductDto): Promise<TipoProductEntity> {
        return this.tipoProductDatasource.postRegisterTipoProduct(createTipoProductDto);
    }
    putTipoProduct(updateTipoProductDto: UpdateTipoProductDto): Promise<TipoProductEntity> {
        return this.tipoProductDatasource.putTipoProduct(updateTipoProductDto);
    }


}