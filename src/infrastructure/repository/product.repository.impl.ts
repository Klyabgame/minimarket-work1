import { CreateProductDto, ProductRepository, UpdateProductDto } from "../../domain";
import { ProductEntity } from "../../domain/entitys/product.entity";


export class ProductRepositoryImpl implements ProductRepository{
    postRegisterProduct(createProductDTO: CreateProductDto): Promise<ProductEntity> {
        throw new Error("Method not implemented.");
    }
    putProduct(updateProductDTO: UpdateProductDto): Promise<ProductEntity> {
        throw new Error("Method not implemented.");
    }

}