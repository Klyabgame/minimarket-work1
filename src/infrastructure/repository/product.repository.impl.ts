import { CreateProductDto, ProductDatasource, ProductRepository, UpdateProductDto } from "../../domain";
import { ProductEntity } from "../../domain/entitys/product.entity";


export class ProductRepositoryImpl implements ProductRepository{

    constructor(
        private readonly productDatasource:ProductDatasource,
    ) {}

    getProductAll(): Promise<ProductEntity[]> {
        return this.productDatasource.getProductAll();
    }
    getProductOne(id: string): Promise<ProductEntity> {
        return this.productDatasource.getProductOne(id);
    }
    postRegisterProduct(createProductDTO: CreateProductDto): Promise<ProductEntity> {
        return this.productDatasource.postRegisterProduct(createProductDTO);
    }
    putProduct(updateProductDTO: UpdateProductDto): Promise<ProductEntity> {
        return this.productDatasource.putProduct(updateProductDTO);
    }
    deleteProduct(id: string): Promise<ProductEntity> {
        return this.productDatasource.deleteProduct(id);
    }


}