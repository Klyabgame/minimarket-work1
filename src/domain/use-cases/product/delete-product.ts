import { CreateProductDto } from "../../dtos";
import { ProductEntity } from "../../entitys/product.entity";
import { ProductRepository } from "../../repository";


export interface DeleteProductUseCase{
    execute(id:string):Promise<ProductEntity>
}

export class DeleteProduct implements DeleteProductUseCase{

    constructor(
        private readonly repository:ProductRepository,
    ){}

    execute(id:string): Promise<ProductEntity> {
        return this.repository.deleteProduct(id);
    }

}