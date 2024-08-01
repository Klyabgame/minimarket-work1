import { CreateProductDto, ProductDatasource, UpdateProductDto } from "../../domain";
import { ProductEntity } from "../../domain/entitys/product.entity";


export class ProductDatasourceImpl implements ProductDatasource{
    
    postRegisterProduct(createProductDTO: CreateProductDto): Promise<ProductEntity> {
        throw new Error("Method not implemented.");
    }
    putProduct(updateProductDTO: UpdateProductDto): Promise<ProductEntity> {
        throw new Error("Method not implemented.");
    }


}