import { CreateTipoProductDto, TipoProductRepository, UpdateTipoProductDto } from "../../domain";
import { TipoProductEntity } from "../../domain/entitys/tipoProduct.entity";


export class TipoProductRepositoryImpl implements TipoProductRepository{
    postRegisterTipoProduct(createTipoProductDto: CreateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }
    putTipoProduct(updateTipoProductDto: UpdateTipoProductDto): Promise<TipoProductEntity> {
        throw new Error("Method not implemented.");
    }


}