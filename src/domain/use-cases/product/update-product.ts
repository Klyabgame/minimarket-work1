import { UpdateProductDto } from "../../dtos";
import { ProductEntity } from "../../entitys/product.entity";
import { ProductRepository } from "../../repository";


export interface UpdateProductUseCase{
    execute(dto:UpdateProductDto):Promise<ProductEntity>
}

export class UpdateProduct implements UpdateProductUseCase{

    constructor(
        private readonly repository:ProductRepository,
    ){}

    execute(dto: UpdateProductDto): Promise<ProductEntity> {
        return this.repository.putProduct(dto);
    }

}