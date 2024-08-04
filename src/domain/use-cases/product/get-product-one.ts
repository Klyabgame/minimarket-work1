import { CreateProductDto } from "../../dtos";
import { ProductEntity } from "../../entitys/product.entity";
import { ProductRepository } from "../../repository";


export interface GetProductOneUseCase{
    execute(id:string):Promise<ProductEntity>
}

export class GetProductOne implements GetProductOneUseCase{

    constructor(
        private readonly repository:ProductRepository,
    ){}

    execute(id:string): Promise<ProductEntity> {
        return this.repository.getProductOne(id);
    }

}