import { CreateProductDto } from "../../dtos";
import { ProductEntity } from "../../entitys/product.entity";
import { ProductRepository } from "../../repository";


export interface CreateProductUseCase{
    execute(dto:CreateProductDto):Promise<ProductEntity>
}

export class CreateProduct implements CreateProductUseCase{

    constructor(
        private readonly repository:ProductRepository,
    ){}

    execute(dto: CreateProductDto): Promise<ProductEntity> {
        return this.repository.postRegisterProduct(dto);
    }

}